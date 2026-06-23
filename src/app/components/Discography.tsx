import { type CSSProperties, useRef, useState } from "react";
import { Link } from "react-router";
import albumCsv from "../../../kardi_album.csv?raw";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ViewMoreButton } from "@/app/components/ViewMoreButton";
import "./Discography.css";

type Album = {
  coverUrl: string;
  title: string;
  detailId: number;
};

const albumDetailIds = [16, 15, 13, 12, 11, 10, 9, 6, 5, 3, 1];

const albums: Album[] = albumCsv
  .trim()
  .split(/\r?\n/)
  .map((row, index) => {
    const separatorIndex = row.indexOf(",");

    return {
      coverUrl: row.slice(0, separatorIndex).trim(),
      title: row.slice(separatorIndex + 1).trim(),
      detailId: albumDetailIds[index] ?? 0,
    };
  })
  .filter(({ coverUrl, title, detailId }) => coverUrl && title && detailId);

function wrapIndex(index: number) {
  return (index + albums.length) % albums.length;
}

function getCircularOffset(index: number, activeIndex: number) {
  let offset = index - activeIndex;
  const halfwayPoint = Math.floor(albums.length / 2);

  if (offset > halfwayPoint) offset -= albums.length;
  if (offset < -halfwayPoint) offset += albums.length;

  return offset;
}

function getCardPosition(offset: number, featuredDistance: number, cardDistance: number) {
  if (offset === 0) return 0;

  const direction = Math.sign(offset);
  return direction * (featuredDistance + (Math.abs(offset) - 1) * cardDistance);
}

type CarouselCardStyle = CSSProperties & {
  "--mobile-x": string;
  "--desktop-x": string;
  "--mobile-scale": number;
  "--desktop-scale": number;
  "--card-opacity": number;
  "--card-z": number;
};

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className={`size-6 md:size-12 ${direction === "left" ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 48 48"
    >
      <path d="m19 12 12 12-12 12" stroke="currentColor" strokeLinecap="square" strokeWidth="2" />
    </svg>
  );
}

export function Discography() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const activeAlbum = albums[activeIndex];

  const move = (direction: number) => {
    setActiveIndex((currentIndex) => wrapIndex(currentIndex + direction));
  };

  return (
    <section
      id="discography"
      aria-labelledby="discography-title"
      className="relative z-10 flex w-full flex-col items-center gap-6 overflow-hidden bg-[#b00020] px-4 py-24 text-white md:gap-[72px] md:px-6 md:py-[120px]"
    >
      <h2 id="discography-title" className="font-display text-[32px] font-normal uppercase leading-none md:text-[56px] md:leading-[0.8]">
        Discography
      </h2>

      <div
        className="flex w-full touch-pan-y flex-col items-center gap-4 outline-none md:gap-6"
        role="region"
        aria-roledescription="carousel"
        aria-label="KARDI discography"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") move(-1);
          if (event.key === "ArrowRight") move(1);
        }}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;

          const distance = event.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;

          if (Math.abs(distance) < 50) return;
          move(distance > 0 ? -1 : 1);
        }}
      >
        <div className="discography-track">
          {albums.map((album, albumIndex) => {
            const offset = getCircularOffset(albumIndex, activeIndex);
            const distance = Math.abs(offset);
            const isActive = offset === 0;
            const isVisible = distance <= 3;
            const cardOpacity = isActive ? 1 : distance === 3 ? 0.75 : distance <= 2 ? 0.5 : 0;
            const cardStyle: CarouselCardStyle = {
              "--mobile-x": `${getCardPosition(offset, 291, 266)}px`,
              "--desktop-x": `${getCardPosition(offset, 524, 424)}px`,
              "--mobile-scale": isActive ? 1.2 : 1,
              "--desktop-scale": isActive ? 1.5 : 1,
              "--card-opacity": cardOpacity,
              "--card-z": 10 - distance,
              pointerEvents: isVisible ? "auto" : "none",
            };

            return (
              <Link
                key={album.coverUrl}
                to={`/discography/${album.detailId}`}
                className="discography-card"
                style={cardStyle}
                onClick={(event) => {
                  if (isActive) return;
                  event.preventDefault();
                  setActiveIndex(albumIndex);
                }}
                tabIndex={isVisible ? 0 : -1}
                aria-current={isActive ? "true" : undefined}
                aria-hidden={!isVisible}
                aria-label={isActive ? `View ${album.title} album details` : `Show ${album.title}`}
              >
                <ImageWithFallback
                  src={album.coverUrl}
                  alt={isActive ? `${album.title} album cover` : ""}
                  className="size-full object-cover"
                  draggable={false}
                  loading={distance <= 2 ? "eager" : "lazy"}
                  decoding="async"
                />
              </Link>
            );
          })}
        </div>

        <div className="flex h-[34px] w-[300px] items-center justify-center gap-2 md:h-auto md:w-[600px]">
          <button
            type="button"
            className="flex shrink-0 items-center justify-center transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={() => move(-1)}
            aria-label="Previous album"
          >
            <ArrowIcon direction="left" />
          </button>

          <Link
            to={`/discography/${activeAlbum.detailId}`}
            className="flex h-8 min-w-0 flex-1 items-center justify-center overflow-hidden text-center font-display text-2xl uppercase leading-none text-inherit no-underline md:h-[72px] md:text-4xl"
            aria-live="polite"
            aria-label={`View ${activeAlbum.title} album details`}
          >
            <span key={activeAlbum.title} className="discography-title-text truncate">
              {activeAlbum.title}
            </span>
          </Link>

          <button
            type="button"
            className="flex shrink-0 items-center justify-center transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={() => move(1)}
            aria-label="Next album"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>

      <ViewMoreButton to="/discography" tone="light" className="mt-12 md:mt-0" />
    </section>
  );
}
