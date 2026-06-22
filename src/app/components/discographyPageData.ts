import chillCover from "../../../album_cover/chill.png";
import cityOfWonderCover from "../../../album_cover/cityofwonder.png";
import embersCover from "../../../album_cover/embers.png";
import goodTimeCover from "../../../album_cover/haveagoodtime.png";
import insideOutCover from "../../../album_cover/insideout.jpg";
import noDoubtCover from "../../../album_cover/no doubt.png";
import notButDiscoCover from "../../../album_cover/notbutdisco.png";
import partyCover from "../../../album_cover/party.png";
import playerOneCover from "../../../album_cover/player 1.png";
import lightsOutCover from "../../../album_cover/when the light out.png";
import whenIMoveCover from "../../../album_cover/whenimove.png";
import wintersGlowCover from "../../../album_cover/winterglow.png";
import drawCover from "../../../album_cover/draw.png";
import nightKeeperCover from "../../../album_cover/night-keeper.png";
import yulgangCover from "../../../album_cover/yulgang-ost.png";
import hiddenSingerCover from "../../../album_cover/hidden-singer-7.png";

export interface DiscographyListItem {
  id: number;
  title: string;
  type: "SINGLE" | "EP" | "OST" | "ALBUM";
  releaseDate: string;
  trackCount: number;
  cover: string;
}

// Metadata order follows the registered order in the supplied Discography.ts.
export const discographyPageItems: DiscographyListItem[] = [
  {
    id: 16,
    title: "Embers (ARC WORLD TOUR 2025-2026 FINALS Official Anthem)",
    type: "SINGLE",
    releaseDate: "2025.12.10",
    trackCount: 2,
    cover: embersCover,
  },
  {
    id: 15,
    title: "When The Lights Out",
    type: "EP",
    releaseDate: "2025.09.10",
    trackCount: 4,
    cover: lightsOutCover,
  },
  {
    id: 14,
    title: "열혈강호 귀환 OST",
    type: "OST",
    releaseDate: "2025.08.07",
    trackCount: 3,
    cover: yulgangCover,
  },
  {
    id: 13,
    title: "Player 1",
    type: "SINGLE",
    releaseDate: "2025.07.29",
    trackCount: 1,
    cover: playerOneCover,
  },
  {
    id: 12,
    title: "Not But Disco",
    type: "SINGLE",
    releaseDate: "2025.05.11",
    trackCount: 1,
    cover: notButDiscoCover,
  },
  {
    id: 11,
    title: "No Doubt",
    type: "EP",
    releaseDate: "2024.11.13",
    trackCount: 4,
    cover: noDoubtCover,
  },
  {
    id: 10,
    title: "Havin' a Good Time",
    type: "SINGLE",
    releaseDate: "2024.07.16",
    trackCount: 1,
    cover: goodTimeCover,
  },
  {
    id: 9,
    title: "Winter's Glow",
    type: "SINGLE",
    releaseDate: "2023.12.18",
    trackCount: 1,
    cover: wintersGlowCover,
  },
  {
    id: 8,
    title: "City of Wonder",
    type: "SINGLE",
    releaseDate: "2023.09.16",
    trackCount: 1,
    cover: cityOfWonderCover,
  },
  {
    id: 7,
    title: "K-909 : When I Move",
    type: "SINGLE",
    releaseDate: "2023.07.23",
    trackCount: 1,
    cover: whenIMoveCover,
  },
  {
    id: 6,
    title: "Inside Out",
    type: "ALBUM",
    releaseDate: "2023.07.17",
    trackCount: 9,
    cover: insideOutCover,
  },
  {
    id: 5,
    title: "PARTY",
    type: "SINGLE",
    releaseDate: "2023.06.20",
    trackCount: 1,
    cover: partyCover,
  },
  {
    id: 4,
    title: "그리다",
    type: "SINGLE",
    releaseDate: "2023.03.01",
    trackCount: 1,
    cover: drawCover,
  },
  {
    id: 3,
    title: "별밤지기",
    type: "SINGLE",
    releaseDate: "2023.01.01",
    trackCount: 1,
    cover: nightKeeperCover,
  },
  {
    id: 2,
    title: "히든싱어7 - Episode. 9",
    type: "SINGLE",
    releaseDate: "2022.11.25",
    trackCount: 1,
    cover: hiddenSingerCover,
  },
  {
    id: 1,
    title: "칠(Chil)",
    type: "EP",
    releaseDate: "2022.09.25",
    trackCount: 4,
    cover: chillCover,
  },
];
