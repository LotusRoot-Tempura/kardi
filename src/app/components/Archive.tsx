import { ViewMoreButton } from "@/app/components/ViewMoreButton";
import { archiveCollections, archiveImages, type ArchiveImage } from "@/app/components/archiveData";
import { Link } from "react-router";
import "./Archive.css";

const HOME_ARCHIVE_LIMIT = 14;
const LAYOUT_GROUP_SIZE = 7;
const collectionIdByGroup = new Map(archiveCollections.map((collection) => [collection.cover.groupId, collection.id]));

function getArchiveDetailUrl(image: ArchiveImage) {
  const collectionId = collectionIdByGroup.get(image.groupId);
  if (!collectionId) return "/archive";

  return `/archive/${collectionId}?image=${encodeURIComponent(image.fileName)}`;
}

function chunkImages(images: ArchiveImage[]) {
  const groups: ArchiveImage[][] = [];

  for (let index = 0; index < images.length; index += LAYOUT_GROUP_SIZE) {
    groups.push(images.slice(index, index + LAYOUT_GROUP_SIZE));
  }

  return groups;
}

function ArchiveLayoutGroup({ images, layoutIndex }: { images: ArchiveImage[]; layoutIndex: number }) {
  return (
    <div className={`archive-grid ${layoutIndex % 2 === 1 ? "archive-grid--mirrored" : ""}`}>
      {images.map((image, slotIndex) => (
        <Link
          key={image.id}
          to={getArchiveDetailUrl(image)}
          className={`archive-item archive-item--${slotIndex + 1}`}
          data-archive-group={image.groupId}
          data-archive-group-index={image.groupIndex}
          aria-label={`View ${image.groupId}, image ${image.groupIndex}`}
        >
          <img
            src={image.src}
            alt={`${image.groupId}, image ${image.groupIndex}`}
            className="archive-image"
            loading="lazy"
            decoding="async"
          />
        </Link>
      ))}
    </div>
  );
}

export function Archive() {
  const visibleGroups = chunkImages(archiveImages.slice(0, HOME_ARCHIVE_LIMIT));

  return (
    <section
      id="archive"
      aria-labelledby="archive-title"
      className="relative z-10 flex w-full flex-col items-center gap-6 overflow-hidden bg-black px-4 py-24 text-white md:gap-[72px] md:px-6 md:py-[120px]"
    >
      <h2 id="archive-title" className="font-display text-[32px] font-normal uppercase leading-none md:text-[56px] md:leading-[0.8]">
        Archive
      </h2>

      <div className="flex w-full flex-col gap-2 md:gap-4">
        {visibleGroups.map((images, layoutIndex) => (
          <ArchiveLayoutGroup key={layoutIndex} images={images} layoutIndex={layoutIndex} />
        ))}
      </div>

      <ViewMoreButton to="/archive" tone="light" className="mt-12 md:mt-0" />
    </section>
  );
}
