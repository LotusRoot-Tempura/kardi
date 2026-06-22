export type ArchiveImage = {
  id: string;
  src: string;
  fileName: string;
  groupId: string;
  groupIndex: number;
};

export type ArchiveCollection = {
  id: string;
  title: string;
  date: string;
  cover: ArchiveImage;
  images: ArchiveImage[];
};

const archiveImageModules = import.meta.glob("../../../archive/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function getFileName(path: string) {
  return path.split("/").pop() ?? path;
}

function getArchiveGroupId(fileName: string) {
  return fileName.replace(/\.[^.]+$/, "").replace(/\s+\(\d+\)$/, "");
}

const groupImageCounts = new Map<string, number>();

export const archiveImages: ArchiveImage[] = Object.entries(archiveImageModules)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath, "en", { numeric: true, sensitivity: "base" }))
  .map(([path, src]) => {
    const fileName = getFileName(path);
    const groupId = getArchiveGroupId(fileName);
    const groupIndex = (groupImageCounts.get(groupId) ?? 0) + 1;
    groupImageCounts.set(groupId, groupIndex);

    return {
      id: path,
      src,
      fileName,
      groupId,
      groupIndex,
    };
  });

const collectionDefinitions = [
  {
    id: "beautiful-mint-life-2026",
    title: "Beautiful Mint Life 2026",
    date: "2026.05.31",
    groupId: "Beautiful Mint Life 2026 2026.05.31WatchoutRiotPlayer 1Not but discoOut of SightNo NeedJump OffB",
    coverFileName: "Beautiful Mint Life 2026 2026.05.31WatchoutRiotPlayer 1Not but discoOut of SightNo NeedJump OffB.jpg",
  },
  {
    id: "seoul-hero-rock-festival-2026",
    title: "2026 Seoul Hero Rock Festival x Tree hundred",
    date: "2026.04.25",
    groupId: "2026 Seoul Hero Rock Festival x Tree hundred2026.04.25EmbersCity of WonderPlayer 1Not But DiscoN",
    coverFileName: "2026 Seoul Hero Rock Festival x Tree hundred2026.04.25EmbersCity of WonderPlayer 1Not But DiscoN.jpg",
  },
  {
    id: "first-music-station-2026",
    title: "2026 First Music Station",
    date: "2026.02.03",
    groupId: "2026 FIRST MUSIC STATION📸 @seo_won_desu",
    coverFileName: "2026 FIRST MUSIC STATION📸 @seo_won_desu (1).jpg",
  },
];

export const archiveCollections: ArchiveCollection[] = collectionDefinitions.flatMap((definition) => {
  const images = archiveImages.filter((image) => image.groupId === definition.groupId);
  const cover = images.find((image) => image.fileName === definition.coverFileName);

  if (!cover) return [];

  return [
    {
      id: definition.id,
      title: definition.title,
      date: definition.date,
      cover,
      images,
    },
  ];
});
