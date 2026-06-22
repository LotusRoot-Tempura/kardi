import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, useParams, useSearchParams } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import { type ArchiveCollection, archiveCollections } from "@/app/components/archiveData";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import markIcon from "@/imports/Hero/afd586037fd37cf204c30da1321f68d986913b90.png";
import archiveBackground from "../../../live_event_bg.png";
import "./ArchiveDetailPage.css";

function GalleryArrow({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d={direction === "previous" ? "M29 14 19 24l10 10" : "m19 14 10 10-10 10"}
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveGallery({ collection, initialImageFileName }: { collection: ArchiveCollection; initialImageFileName?: string }) {
  const galleryImages = useMemo(
    () => [collection.cover, ...collection.images.filter((image) => image.id !== collection.cover.id)],
    [collection],
  );
  const initialIndex = Math.max(
    0,
    initialImageFileName ? galleryImages.findIndex((image) => image.fileName === initialImageFileName) : 0,
  );
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const thumbnailTrackRef = useRef<HTMLDivElement | null>(null);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: galleryImages.length > 1,
    startIndex: initialIndex,
    duration: 24,
    watchDrag: () => window.matchMedia("(max-width: 767px)").matches,
  });

  const syncSelectedIndex = useCallback(() => {
    if (emblaApi) setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const selectImage = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      setActiveIndex(index);
    },
    [emblaApi],
  );

  const showPrevious = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const showNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    syncSelectedIndex();
    emblaApi.on("select", syncSelectedIndex);
    emblaApi.on("reInit", syncSelectedIndex);

    return () => {
      emblaApi.off("select", syncSelectedIndex);
      emblaApi.off("reInit", syncSelectedIndex);
    };
  }, [emblaApi, syncSelectedIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showNext, showPrevious]);

  useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) return;

    const thumbnailTrack = thumbnailTrackRef.current;
    const activeThumbnail = thumbnailRefs.current[activeIndex];
    if (!thumbnailTrack || !activeThumbnail) return;

    const trackBounds = thumbnailTrack.getBoundingClientRect();
    const thumbnailBounds = activeThumbnail.getBoundingClientRect();
    const styles = window.getComputedStyle(thumbnailTrack);
    const paddingLeft = Number.parseFloat(styles.paddingLeft) || 0;
    const paddingRight = Number.parseFloat(styles.paddingRight) || 0;
    const visibleLeft = trackBounds.left + paddingLeft;
    const visibleRight = trackBounds.right - paddingRight;
    const isOutsideViewport = thumbnailBounds.left < visibleLeft || thumbnailBounds.right > visibleRight;

    if (!isOutsideViewport) return;

    thumbnailTrack.scrollTo({
      left: Math.max(0, activeThumbnail.offsetLeft - paddingLeft),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }, [activeIndex]);

  return (
    <main
      className="archive-detail-page"
      style={{ backgroundImage: `url(${archiveBackground})` }}
      aria-labelledby="archive-detail-title"
    >
      <h1 id="archive-detail-title" className="sr-only">
        {collection.title}
      </h1>

      <header className="archive-detail-header">
        <Link to="/" aria-label="Home" className="archive-detail-mark">
          <ImageWithFallback src={markIcon} alt="Artist mark" />
        </Link>
        <Link to="/archive" className="archive-detail-back">
          Back
        </Link>
      </header>

      <section className="archive-detail-stage" aria-label={`${collection.title} gallery`}>
        <div className="archive-detail-viewport" ref={emblaRef}>
          <div className="archive-detail-track">
            {galleryImages.map((image, index) => (
              <figure className="archive-detail-slide" key={image.id}>
                <img
                  src={image.src}
                  alt={`${collection.title}, image ${index + 1} of ${galleryImages.length}`}
                  loading={index === initialIndex ? "eager" : "lazy"}
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div className="archive-detail-controls" aria-label="Gallery controls">
        <button type="button" onClick={showPrevious} aria-label="Previous image">
          <GalleryArrow direction="previous" />
        </button>
        <button type="button" onClick={showNext} aria-label="Next image">
          <GalleryArrow direction="next" />
        </button>
      </div>

      <div ref={thumbnailTrackRef} className="archive-detail-thumbnails" aria-label="Gallery thumbnails">
        {galleryImages.map((image, index) => (
          <button
            key={image.id}
            ref={(element) => {
              thumbnailRefs.current[index] = element;
            }}
            type="button"
            className={index === activeIndex ? "is-active" : ""}
            onClick={() => selectImage(index)}
            aria-label={`Show image ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
          >
            <img src={image.src} alt="" loading="lazy" decoding="async" />
          </button>
        ))}
      </div>
    </main>
  );
}

export function ArchiveDetailPage() {
  const { collectionId } = useParams();
  const [searchParams] = useSearchParams();
  const collection = archiveCollections.find((item) => item.id === collectionId);
  const initialImageFileName = searchParams.get("image") ?? undefined;

  if (!collection) return <Navigate to="/archive" replace />;

  return (
    <ArchiveGallery
      key={`${collection.id}:${initialImageFileName ?? "cover"}`}
      collection={collection}
      initialImageFileName={initialImageFileName}
    />
  );
}
