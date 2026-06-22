import img1 from "./album_cover/chill.png";
import img2 from "./album_cover/히든싱어7.png";
import img3 from "./album_cover/별밤지기.png";
import img4 from "./album_cover/그리다.png";
import img5 from "./album_cover/party.png";
import img6 from "./album_cover/insideout.jpg";
import img7 from "./album_cover/whenimove.png";
import img8 from "./album_cover/cityofwonder.png";
import img9 from "./album_cover/winterglow.png";
import img10 from "./album_cover/haveagoodtime.png";
import img11 from "./album_cover/no doubt.png";
import img12 from "./album_cover/notbutdisco.png";
import img13 from "./album_cover/player 1.png";
import img14 from "./album_cover/열혈강호귀환ost.png";
import img15 from "./album_cover/when the light out.png";
import img16 from "./album_cover/embers.png";

export interface DiscographyTrack {
  no?: number;
  title: string;
  duration: string;
  isTitle?: boolean;
  description?: string;
  credits: string[];
}

export interface Discography {
  id: number;
  title: string;
  type: "SINGLE" | "EP" | "OST" | "ALBUM";
  releaseDate: string;
  cover: string;
  description: string;
  tracks: DiscographyTrack[];
}

export const ARTIST_DISCOGRAPHIES: Discography[] = [
  {
    id: 16,
    title: "Embers (ARC WORLD TOUR 2025-2026 FINALS Official Anthem)",
    type: "SINGLE",
    releaseDate: "2025.12.10",
    cover: img16,
    description: "",
    tracks: [
      {
        title: "[Credit]",
        duration: "",
        isTitle: true,
        credits: [
          "카디 KARDI",
          "김예지 Kim Yeji",
          "황린 Hwang Leen",
          "박다울 Park Dawool",
          "황인규 Hwang Inkyu",
          "작사/작곡/편곡/연주 composed, lyrics, arranged, performed by 카디 KARDI",
          "드럼 연주 Drums 최연형 Choi Yeonhyeong",
          "드럼 녹음 Drums recorded by 오형석 Oh Hyungseok, 유상호 Yoo Sangho (타이탄스튜디오 Titan Studio)",
          "녹음 recorded by 황린 Hwang Leen",
          "믹싱 mixed by 황린 Hwang Leen",
          "마스터링 mastered by 강승희 Seunghee Kang (소닉코리아 Sonic Korea)",
        ],
      },
    ],
  },
  {
    id: 15,
    title: "When The Lights Out",
    type: "EP",
    releaseDate: "2025.09.10",
    cover: img15,
    description:
      '[When The Lights Out]\n불이 꺼진 세계에서 우리는 어디로 가야 하는가.\n어둠 속에서 빛을 찾는 KARDI의 네 가지 제안.\n갈등과 혼란으로 덮인 세상, 끝없이 높아진 도덕과 이상. 사방에서 빼곡히 겨눠진 총구들. 그 틈 사이로 우리는 살아간다. 언제부터 시작된 것인지조차 알 수 없지만, 분명한 건 지금 우리의 세상은 위태롭다.\n그 속에서 흔들리는 우리의 내면도 다르지 않다. 사회의 혼돈은 곧 개인의 불안이 되고, 빛을 잃은 마음은 우울과 두려움에 잠식된다.\n그러나 KARDI는 노래한다.\n"우리는 여전히, 다시, 빛을 찾아야 한다."',
    tracks: [
      {
        no: 1,
        title: "Jump Off",
        duration: "",
        isTitle: true,
        description:
          '"WE\'RE LIVING IN THE MOSHPIT"\n세상은 거대한 Moshpit. 서로 부딪히고 밀려나며 상처를 남기지만, 동시에 서로를 끌어안는 집합체이다.',
        credits: [],
      },
      {
        no: 2,
        title: "도깨비불",
        duration: "",
        description:
          '"The time is now"\n이제는 멈춰야 한다. 총구처럼 날아드는 말과 끝없는 다툼 속에서 KARDI는 노래한다. 우리가 향해야 할 것은 파괴가 아니라 지금, 이 순간의 평화다.',
        credits: [],
      },
      {
        no: 3,
        title: "Back!",
        duration: "",
        description:
          '"Go back to the start where it all began"\n세상의 소음에 흔들릴 때, 우리는 다시 시작점으로 돌아간다. 그곳에 남아 있는 작은 별빛은, 다시 살아갈 용기를 준다.',
        credits: [],
      },
      {
        no: 4,
        title: "반복되는 노래(Wipilapilore)",
        duration: "",
        description:
          "\"위필라필로레\"\n끝없이 맴도는 불협화음 속에서 울려 퍼지는 주문. 상처와 자기혐오 속에서도 마주친 뜻밖의 연민은 우리를 '나'로 받아들이게 한다.",
        credits: [],
      },
      {
        title: "[Credit]",
        duration: "",
        credits: [
          "카디 KARDI 김예지 Kim Yeji 황린 Hwang Leen 박다울 Park Dawool 황인규 Hwang Inkyu",
          "작사/작곡/편곡/연주 composed, lyrics, arranged, performed by 카디 KARDI",
          "Track 2, 3 드럼 연주 drums by 최연형 Choi Yeonhyeong",
          "Track 2, 3 드럼 녹음 Drums recorded by 오혜석 Oh Hyeseok (몰스튜디오 MOL Studio)",
          "녹음 recorded by 황린 Hwang Leen",
          "믹싱 mixed by 황린 Hwang Leen",
          "마스터링 mastered by 강승희 Kang Seunghee (소닉코리아 Sonic Korea)",
          "앨범아트 cover artwork by 정진 Jeong Jin",
          "제작지원: 한국콘텐츠진흥원",
        ],
      },
    ],
  },
  {
    id: 14,
    title: "열혈강호 귀환 OST",
    type: "OST",
    releaseDate: "2025.08.07",
    cover: img14,
    description:
      "밴드 카디(KARDI)가 참여한 모바일 게임 \"열혈강호 귀환\" ost 삽입곡 'Burning my heart'는 록 발라드 형식의 크로스오버적 오케스트라가 가미된 얼터너티브 락 장르의 곡으로. 1994년 첫 시작으로 현재까지 연재되고 있는 대한민국에서 가장 최장기 인기 무협 만화 '열혈강호'를 원작으로 한 모바일 게임 OST 삽입곡 이다.\n첫 번째 Track 'Prologue Opening'은 전쟁의 서막, 폭풍전야의 느낌을 멤버 박다울의 거문고와 드라마틱한 오케스트라의 연주가 합쳐져 긴장감과 몰입감을 더했다.\n두 번째 Track 'Burning my heart'는 절제된 피아노 연주로 시작되어, 보컬 김예지의 시니컬하면서도 감성적인 보컬이 곡의 전체를 이끌어간다. 후렴구부터 터져 나오는 다이나믹한 오케스트라 연주와 황린 황인규의 록 비트의 밴드 사운드가 더해져 완성도 높은 정통 록 음악의 서사를 그려냈다.\n카디의 Burning my heart는 레드벨벳, 스트레이키즈, 김종국, 김재환 등 유명 아티스트들의 앨범에 참여한 대세 작곡가 바크, 정규창, Dr.Ba$$가 작편곡을 맡아 곡의 완성도를 더했다",
    tracks: [
      {
        no: 1,
        title: "Prologue Opening",
        duration: "",
        credits: [],
      },
      {
        no: 2,
        title: "Burning my heart",
        duration: "",
        isTitle: true,
        credits: [],
      },
      {
        no: 3,
        title: "Burning my heart (Inst.)",
        duration: "",
        credits: [],
      },
      {
        title: "[Credit]",
        duration: "",
        credits: [
          "Executive Produced 퍼니플레이 (Funny Play)",
          "Produced 강민",
          "Composed 바크, 정규창, Dr.Ba$$(1), 강민",
          "Lyrics 바크, 강민",
          "Arranged 바크, 정규창, Dr.Ba$$(1)",
          "Vocal Directed 바크, 정규창, 강민",
          "Vocal Performed 김예지 (KARDI)",
          "Guitar Performed 황린 (KARDI)",
          "Bass Performed 황인규 (KARDI)",
          "Geomungo Performed 박다울 (KARDI)",
          "Piano Performed 바크",
          "Drum Performed 바크",
          "Chorus Performed 김현아",
          "String Arranged & Conducted 전주현",
          "String Performed 융스트링",
          "Recording Engineer 정규창 at W Sound, 주예찬 at 서울스투디오",
          "Audio Editing 바크 at W Sound",
          "Mixing Engineer 정규창 at W Sound",
          "Mastering Engineer 권남우 at 821 Sound Mastering",
        ],
      },
    ],
  },
  {
    id: 13,
    title: "Player 1",
    type: "SINGLE",
    releaseDate: "2025.07.29",
    cover: img13,
    description: "변화를 염원하는 사람들에게",
    tracks: [
      {
        title: "[Credit]",
        duration: "",
        credits: [
          "카디 KARDI",
          "김예지 Kim Yeji",
          "황린 Hwang Leen",
          "박다울 Park Dawool",
          "황인규 Hwang Inkyu",
          "작사/작곡/편곡/연주 composed, lyrics, arranged, performed by 카디 KARDI",
          "Drums 최연형 Choi Yeonhyeong",
          "Drums recorded by 오혜석 Oh Hyeseok (몰스튜디오 MOL Studio)",
          "recorded by 황린 Hwang Leen",
          "mixed by 황린 Hwang Leen",
          "mastered by 강승희 Seunghee Kang (소닉코리아 Sonic Korea)",
          "cover artwork by 정진 Jeong Jin",
        ],
      },
    ],
  },
  {
    id: 12,
    title: "Not But Disco",
    type: "SINGLE",
    releaseDate: "2025.05.11",
    cover: img12,
    description: "최악의 내일이 오더라도 우리는 춤을 추자",
    tracks: [
      {
        title: "[Credit]",
        duration: "",
        credits: [
          "카디 KARDI",
          "김예지 Kim Yeji",
          "황린 Hwang Leen",
          "박다울 Park Dawool",
          "황인규 Hwang Inkyu",
          "composed, lyrics, arranged, performed by 카디 KARDI",
          "Drums 최연형 Choi Yeonhyeong",
          "Drums recorded by 오혜석 Oh Hyeseok (몰스튜디오 MOL Studio)",
          "recorded by 황린 Hwang Leen",
          "mixed by 황린 Hwang Leen",
          "mastered by 강승희 Seunghee Kang (소닉코리아 Sonic Korea)",
          "cover artwork by 정진 Jeong Jin",
        ],
      },
    ],
  },
  {
    id: 11,
    title: "No Doubt",
    type: "EP",
    releaseDate: "2024.11.13",
    cover: img11,
    description:
      "빼곡히 얽혀있던 생각의 소리들은 비로소 직선이 되어 나아간다.\n걸어가자, 불안이 우릴 삼켜도.\n살아내자, 자기 자신을 믿고.\n살아가자, 각자의 전쟁을 이겨내고.",
    tracks: [
      {
        no: 1,
        title: "Zone",
        duration: "",
        credits: [],
      },
      {
        no: 2,
        title: "No Need",
        duration: "",
        credits: [],
      },
      {
        no: 3,
        title: "Rule the Grounds (PUBG Global Championship 2024 Anthem)",
        duration: "",
        isTitle: true,
        credits: [],
      },
      {
        no: 4,
        title: "No Need (Remix)",
        duration: "",
        credits: [],
      },
      {
        title: "[Credit]",
        duration: "",
        credits: [
          "카디 KARDI",
          "김예지 Kim Yeji",
          "황린 Leen Hwang",
          "박다울 Park Dawool",
          "황인규 Hwang Inkyu",
          "작사/작곡/편곡/연주 composed, lyrics, arranged, performed by 카디 KARDI",
          "Track 2 드럼 연주 Drums 최연형 Choi Yeonhyeong",
          "Track 2 드럼 녹음 Drums recorded by 이재명 JaeMyoung Lee (JMStudio)",
          "Track 1,3 드럼 프로그래밍 Drums Programmed by 황린 Leen Hwang",
          "Track 4 리믹스 Remixed by 황린 Leen Hwang",
          "녹음 recorded by 황린 Leen Hwang",
          "믹싱 mixed by 황린 Leen Hwang",
          "마스터링 mastered by 강승희 Seunghee Kang (소닉코리아 Sonic Korea)",
          "앨범아트 cover artwork by 한예림 Han Yerim",
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Havin' a Good Time",
    type: "SINGLE",
    releaseDate: "2024.07.16",
    cover: img10,
    description:
      "언제나 우리의 곁을 지켜 준\n조건 없는 모든 사랑에 감사를 표하며",
    tracks: [
      {
        title: "[Credit]",
        duration: "",
        credits: [
          "카디 KARDI",
          "김예지 Kim Yeji",
          "황린 Leen Hwang",
          "박다울 Park Dawool",
          "황인규 Hwang Inkyu",
          "작사/작곡/편곡/연주 composed, lyrics, arranged, performed by 카디 KARDI",
          "drums by 최연형 Choi Yeonhyeong",
          "recorded by 황린 Leen Hwang, 이재명 JaeMyoung Lee (JMStudio)",
          "mixed by 황린 Leen Hwang",
          "mastered by 강승희 Seunghee Kang (소닉코리아 Sonic Korea)",
          "cover artwork by 황휘 HWI",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Winter's Glow",
    type: "SINGLE",
    releaseDate: "2023.12.18",
    cover: img9,
    description:
      "추울수록, 시릴수록 곁에 있는 사랑하는 것들을 따뜻하게 꼬옥 안아주어요. 아낌없이.",
    tracks: [
      {
        title: "[Credit]",
        duration: "",
        credits: [
          "카디(KARDI)",
          "보컬(Vocal) 김예지(Kim Yeji)",
          "기타(Guitar) 황린(Leen Hwang)",
          "거문고(Geomungo) 박다울(Park Dawool)",
          "베이스(Bass) 황인규(Hwang Inkyu)",
          "composed, lyrics, arranged, performed by 카디(KARDI)",
          "recorded/mixed/programmed by 황린(Leen Hwang)",
          "mastered by 강승희(Seunghee Kang) (소닉코리아 Sonic Korea)",
          "Album Artwork 정소영(Soyoung Chong)",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "City of Wonder",
    type: "SINGLE",
    releaseDate: "2023.09.16",
    cover: img8,
    description:
      "2030 부산세계박람회 테마송으로 제작된 'City of Wonder'는 한국 전통악기 거문고 루프와 에너지 넘치는 록 사운드에 방점을 찍는 듯한 보컬의 가창과 클라이막스를 장식한 태평소, 향피리, 장구등의 전통악기로 완성된 곡으로 2030 부산세계박람회가 표방하는 과거와 현재가 공존하고 동양과 서양이 만나는, 고요를 즐기면서 끓어오르는 열정이 있는 도시 부산의 모습을 닮았다.",
    tracks: [
      {
        title: "[Credit]",
        duration: "",
        credits: [
          "작곡 (Compose)",
          "황린(Leen Hwang), 황인규(Inkyu Hwang), 김예지(Yeji Kim), 박다울(Dawool Park), 전성배(Sungbae Jeon)",
          "작사 (Lyrics)",
          "황린(Leen Hwang), 황인규(Inkyu Hwang), 김예지(Yeji Kim), 박다울(Dawool Park), 전성배(Sungbae Jeon), 수젠(SUZANNE)",
          "편곡 (Arrange)",
          "황린(Leen Hwang), 황인규(Inkyu Hwang), 김예지(Yeji Kim), 박다울(Dawool Park), 전성배(Sungbae Jeon)",
          "태평소 (Taepyeongso), 향피리 (Hyangpiri)",
          "한지수(Jisu Han)",
          "장구 (Janggu)",
          "방지원(Jiwon Bang)",
          "녹음 (Recording), 믹싱 (Mixing)",
          "Manny Park @SIGRECORDINGS",
          "마스터링 (Mastering)",
          "전훈(Cheon Hoon) @Sonic Korea Mastering Studio",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "K-909 : When I move",
    type: "SINGLE",
    releaseDate: "2023.07.23",
    cover: img7,
    description:
      "'아티스트를 위한, 글로벌 팬들을 위한 단 하나의 무대'\n고품격 음악 예능의 명가 JTBC에서 만드는 K-POP 글로벌 뮤직쇼 K-909가 돌아왔다!\nK-POP을 이끌어나갈 차세대 아티스트들과 함께 하는 <넥스트 제너레이션>\n이번 주인공은 시그니처 악기인 거문고를 통해 유니크한 사운드를 내는 슈퍼밴드 카디 (KARDI)!\n레전드 걸그룹 카라가 15주년을 맞아 완전체로 뭉쳐 발표한 감각적인 댄스곡 <WHEN I MOVE>에 카디 (KARDI)만의 개성 강한 음악색을 입혀 재구성했다.",
    tracks: [
      {
        title: "[Credit]",
        duration: "",
        credits: [
          'Lyrics by Adrienne Ben Haim, Anton Goransson, Isabella Sjostrand, Brandon "B HAM" Hamlin, Y0UNG, 강지영, 김보아, 니콜',
          'Composed by Adrienne Ben Haim, Anton Goransson, Isabella Sjostrand, Brandon "B HAM" Hamlin, 강지영, 김보아',
          "Arranged, Performed by 카디(KARDI)",
          "Drums by 최연형(YeonHyeong Choi)",
          "Recorded by 황린(Leen Hwang), 박정호(Jungho Park) (Titan recording studio)",
          "Mixed, Master by 오형석(Hyungsuk Oh) (Titan recording studio)",
          "Publisher Agent : Major7 E&M",
          "발매사 : YG PLUS",
          "기획사 : 스튜디오잼",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Inside Out",
    type: "ALBUM",
    releaseDate: "2023.07.17",
    cover: img6,
    description:
      "카디(KARDI)의 정규 1집 앨범 [Inside Out] 발매!!\n카디가 발견한 아홉 가지 '자신'의 파편들을 수록한 앨범 [Inside Out]은\n록 장르 베이스에 앰비언트, 뉴에이지, 트랩, 메탈, 퓨전 재즈, 라틴, 팝, 발라드, 개러지 록, 인더스트리얼 등의 다양한 장르가 융합된 9개의 트랙으로 구성되었다.\n타인과의 관계를 벗어난 완전한 '나'의 정체성을 규정할 수 없듯이 이러한 다양한 장르와 융합하는 작법은 수많은 타인 속에서 '자신'을 찾아 나가며 현대를 살고 있는 밴드 '카디'의 정체성에 대한 고민과 맞닿아 있다.\n특정한 사운드를 유지하기보다 다양한 장르의 사운드를 과감 없이 차용하고 변경하는데 망설임이 없는 카디의 행보는 현대 사회의 미디어와 커뮤니티에서 제시하는 기준을 따르면서도 끊임없이 자신의 존재성을 찾고자 하는 우리 '자신'을 닮았다.",
    tracks: [
      {
        no: 1,
        title: "Inside Out",
        duration: "",
        isTitle: true,
        credits: [
          "composed, lyrics, arranged, performed by 카디(KARDI)",
          "drums by 전성배(Sungbae Jeon)",
          "recorded by 황린(Leen Hwang), Manny Park (시그 레코딩스 SIG Recording's)",
          "mix/mastered by Manny Park (시그 레코딩스 SIG Recording's)",
        ],
      },
      {
        no: 2,
        title: "AMOG",
        duration: "",
        credits: [
          "composed, lyrics, arranged, performed by 카디(KARDI)",
          "drums by 전성배(Sungbae Jeon)",
          "recorded by 황린(Leen Hwang), Manny Park (시그 레코딩스 SIG Recording's), 박정호(Jungho Park) (Titan recording studio)",
          "mix/mastered by Manny Park (시그 레코딩스 SIG Recording's)",
        ],
      },
      {
        no: 3,
        title: "PARTY",
        duration: "",
        credits: [
          "composed, lyrics, arranged, performed by 카디(KARDI)",
          "drums by 전성배(Sungbae Jeon)",
          "recorded by 황린(Leen Hwang), Manny Park (시그 레코딩스 SIG Recording's)",
          "mix/mastered by Manny Park (시그 레코딩스 SIG Recording's)",
        ],
      },
      {
        no: 4,
        title: "Out of Sight",
        duration: "",
        credits: [
          "composed, lyrics, arranged, performed by 카디(KARDI)",
          "drums by 전성배(Sungbae Jeon)",
          "recorded by 황린(Leen Hwang), Manny Park (시그 레코딩스 SIG Recording's), 박정호(Jungho Park) (Titan recording studio)",
          "mix/mastered by Manny Park (시그 레코딩스 SIG Recording's)",
        ],
      },
      {
        no: 5,
        title: "Blow",
        duration: "",
        credits: [
          "composed, lyrics, arranged, performed by 카디(KARDI)",
          "drums by 전성배(Sungbae Jeon)",
          "recorded by 황린(Leen Hwang), Manny Park (시그 레코딩스 SIG Recording's), 박정호(Jungho Park) (Titan recording studio)",
          "mix/mastered by Manny Park (시그 레코딩스 SIG Recording's)",
        ],
      },
      {
        no: 6,
        title: "Skybound",
        duration: "",
        credits: [
          "composed, lyrics, arranged, performed by 카디(KARDI)",
          "drums by 전성배(Sungbae Jeon)",
          "recorded by 황린(Leen Hwang), Manny Park (시그 레코딩스 SIG Recording's)",
          "mix/mastered by Manny Park (시그 레코딩스 SIG Recording's)",
        ],
      },
      {
        no: 7,
        title: "Pearl",
        duration: "",
        credits: [
          "composed, lyrics, arranged, performed by 카디(KARDI)",
          "recorded by 황린(Leen Hwang), Manny Park (시그 레코딩스 SIG Recording's)",
          "mix/mastered by Manny Park (시그 레코딩스 SIG Recording's)",
        ],
      },
      {
        no: 8,
        title: "Insane",
        duration: "",
        credits: [
          "composed, lyrics, arranged, performed by 카디(KARDI)",
          "recorded by 황린(Leen Hwang), Manny Park (시그 레코딩스 SIG Recording's), 박정호(Jungho Park) (Titan recording studio)",
          "mix/mastered by Manny Park (시그 레코딩스 SIG Recording's)",
        ],
      },
      {
        no: 9,
        title: "선(Line)",
        duration: "",
        credits: [
          "composed, lyrics, arranged, performed by 카디(KARDI)",
          "drums by 전성배(Sungbae Jeon)",
          "recorded by 황린(Leen Hwang), Manny Park (시그 레코딩스 SIG Recording's), 박정호(Jungho Park) (Titan recording studio)",
          "mix/mastered by Manny Park (시그 레코딩스 SIG Recording's)",
        ],
      },
      {
        title: "[Credit]",
        duration: "",
        credits: [
          "카디(KARDI)",
          "보컬(Vocal) 김예지(Yeji Kim)",
          "기타(Guitar) 황린(Leen Hwang)",
          "거문고(Geomungo) 박다울(Dawool Park)",
          "베이스(Bass) 황인규(Inkyu Hwang)",
          "executive produce by SGMRECORDS Co., Ltd.",
          "co. executive produce by NEXTLEVELPARTNERS Co., Ltd.",
          "chief executive officer 이명재(Myoungjae Lee)",
          "co. executive officer 최영근(Youngguen Choi)",
          "chief producer 박기태(Gitae Park)",
          "a&r 오택현(OHSHYTTTT)",
          "a&r 손수민(Sumin Son)",
          "general manager 여인구(Inkoo Yeo)",
          "assistant manager 백득성(Deuksung Baek)",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "PARTY",
    type: "SINGLE",
    releaseDate: "2023.06.20",
    cover: img5,
    description:
      "지금 있는 곳에서 뛰쳐나가고 싶은 사람들, 어린 시절 모든 걸 두고 온 채 몸만 커버린 사람들,\n마음 속 불이 꺼지지 않은 사람들, 가슴 속에 응어리를 품고 있는 사람들 모두 여기 모여 축제를 벌이자.",
    tracks: [
      {
        title: "[Credit]",
        duration: "",
        credits: [
          "카디(KARDI)",
          "보컬(Vocal) 김예지(Yeji Kim)",
          "기타(Guitar) 황린(Leen Hwang)",
          "거문고(Geomungo) 박다울(Dawool Park)",
          "베이스(Bass) 황인규(Inkyu Hwang)",
          "executive produce by SGMRECORDS Co., Ltd.",
          "co. executive produce by NEXTLEVELPARTNERS Co., Ltd.",
          "written, arranged, performed by 카디(KARDI)",
          "drums by 전성배(Jeon Sungbae)",
          "recorded by 황린(Leen Hwang), Manny Park (SIG Recording's)",
          "mix/mastered by Manny Park (SIG Recording's)",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "그리다",
    type: "SINGLE",
    releaseDate: "2023.03.01",
    cover: img4,
    description:
      "티빙 웹툰싱어에서 컬래버레이션 곡으로 제작된 카디의 '그리다'는\n네이버 웹툰에서 10년 동안 연재되었던 살아있는 전설 박용제 작가의 '갓 오브 하이 스쿨'의 마지막 대미를 카디만의 느낌으로 표현한 서정적인 거문고의 선율과 보컬을 통해서 주인공 '진모리'의 마지막 인사와 새로운 시작을 표현한 노래이다.",
    tracks: [
      {
        title: "[Credit]",
        duration: "",
        credits: [
          "카디(KARDI)",
          "보컬(Vocal) 김예지(Yeji Kim)",
          "기타(Guitar) 황린(Leen Hwang)",
          "거문고(Geomungo) 박다울(Dawool Park)",
          "베이스(Bass) 황인규(Inkyu Hwang)",
          "드럼(Drum) 전성배(Holygrail)",
          "written, arranged and performed by 카디(KARDI)",
          "produced by 카디(KARDI)",
          "recorded by 황린(Leen Hwang), Manny Park (SIG Recording's)",
          "mixed, mastered by Manny Park (SIG Recording's)",
          "album art by 박용제 (Yong je Park)",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "별밤지기",
    type: "SINGLE",
    releaseDate: "2023.01.01",
    cover: img3,
    description:
      "카디(KARDI)가 선보이는 새로운 장르의 싱글 '별밤지기'.\n현대의 치열한 삶 속에서 우리의 음악은 누군가에게 어떠한 의미로 존재하는가.\n카디의 2023년 새해를 여는 첫 번째 싱글 '별밤지기'는 '나'의 음악이 아닌 '우리'의 음악이란 무엇인가 하는 음악적 화두를 통해 만들어진 싱글이다.\n'7000RPM', 'WatchOut' 에서 보여줬던 파격적인 사운드와 에너지와는 또 다른 호흡을 가졌지만 '별밤지기'에서 카디가 선보이는 음악은 분명 카디가 밴드로서 음악인으로서 정체성을 좀 더 단단하게 만들어가고 있음을 느낄 수 있다.",
    tracks: [
      {
        title: "[Credit]",
        duration: "",
        credits: [
          "카디(KARDI)",
          "싱글 앨범 '별밤지기(Night Keeper)'",
          "보컬(Vocal) 김예지(Yeji Kim)",
          "기타(Guitar) 황린(Leen Hwang)",
          "거문고(Geomungo) 박다울(Dawool Park)",
          "베이스(Bass) 황인규(Inkyu Hwang)",
          "드럼(Drum) 전성배(Holygrail)",
          "executive produce by SGMRECORDS Co., Ltd.",
          "co. executive produce by NEXTLEVELPARTNERS Co., Ltd.",
          "chief executive officer 이명재(Myoung Jae Lee)",
          "co. executive officer 최영근(Youngguen Choi)",
          "chief producer 박기태(Gitae Park)",
          "a&r 손수민(Sumin Son)",
          "assistant manager 백득성(Deuksung Baek)",
          "artwork by 심재(Sim Jae)",
          "written, arranged and performed by 황린(Leen Hwang), 김예지(Yeji Kim), 박다울(Dawool Park), 황인규(Inkyu Hwang), 전성배(Sungbae Jeon)",
          "produced by 황린(Leen Hwang), 김예지(Yeji Kim), 박다울(Dawool Park), 황인규(Inkyu Hwang), 전성배(Sungbae Jeon)",
          "recorded by 황린(Leen Hwang), Manny Park (SIG Recording's)",
          "mixed, mastered by Manny Park (SIG Recording's)",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "히든싱어7 - Episode. 9",
    type: "SINGLE",
    releaseDate: "2022.11.25",
    cover: img2,
    description:
      "Since 2012, JTBC 대표 음악 예능 <히든싱어>가 시즌7로 돌아왔다!\n원조 가수의 숨은 명곡을 재해석 해 색다른 목소리로 들을 수 있는 <히든 송(Hidden Song)>\n<히든 송>의 아홉 번째 원조가수는 가슴을 울리는 보컬의 神! 명품 보컬 신용재!\n신용재의 첫 솔로 정규앨범의 타이틀 곡인 <첫줄>은 신용재가 직접 작사, 작곡한 곡으로 특유의 호소력 짙은 목소리와 폭발적인 고음으로 많은 사랑을 받았다. 이 곡을 JTBC <슈퍼밴드2>를 통해 탄생한 글로벌 K밴드! 국내 유일의 거문고 사운드를 가진 밴드 카디가 한국적인 사운드를 담아 새롭게 재해석했다.",
    tracks: [
      {
        title: "[Credit]",
        duration: "",
        credits: [
          "Composed by KingMing, 신용재 (2F)",
          "Lyrics by 신용재 (2F)",
          "KARDI (카디)",
          "보컬 - 김예지",
          "기타 - 황린",
          "거문고 - 박다울",
          "베이스 - 황인규",
          "드럼 – 전성배",
          "레코딩 - 황린, 안태봉(오르카레코딩스튜디오)",
          "믹스, 마스터링 - 안태봉(오르카레코딩스튜디오)",
          "Publishing Agent : Prossima Music Entertainment Co., Ltd.",
          "발매사 : 카카오엔터테인먼트",
          "기획사 : 스튜디오잼, ㈜쇼플레이",
        ],
      },
    ],
  },
  {
    id: 1,
    title: "칠(Chil)",
    type: "EP",
    releaseDate: "2022.09.25",
    cover: img1,
    description:
      "한국 밴드음악의 씬스틸러로 주목받는 카디(KARDI)의 첫 번째 미니앨범 '칠(Chil)'.\n미니앨범 '칠(Chil)'은 한국의 전통악기인 거문고가 함께 있는 밴드로서 정체성을 찾기 위한 카디의 고민과 노력이 4개의 트랙에 간결하지만 명징하게 스며 있는 앨범이다.\n총 4곡으로 구성된 앨범 '칠(Chil)'에는 박다울의 파격적인 거문고 사운드를 테마로 한 EDM 트랙 'WatchOut'을 포함하여, 드럼의 전성배와 베이스 황인규의 그루비한 리듬 리드가 돋보이는 R&B 트랙 '칠(Chil)', 밴드 카디의 리더이자 기타리스트 황린의 질주하는 기타 사운드를 기반으로 한 록 트랙 'Knockdown', 카디의 첫 작품이었던 '7000RPM'의 계보를 이은 듯한 힙합 리듬과 록베이스 사운드를 가미한 트랙 'Riot'이 수록되었다.\n카디의 프론트맨이자 보컬 김예지 특유의 음색과 가창력은 각기 다른 4개의 트랙을 하나의 앨범으로 완성했다.\n아이코닉한 사운드 메이킹과 장르를 파괴하는 실험적인 작법이 담긴 '칠(Chil)'은 카디가 한국 밴드음악의 씬스틸러임을 다시 한번 입증하는 앨범이다.",
    tracks: [
      {
        no: 1,
        title: "Knockdown",
        duration: "03:24",
        isTitle: true,
        credits: [
          "written, arranged and performed by 카디(KARDI)",
          "produced by 카디(KARDI)",
          "recorded by 황린(Leen Hwang), 이지영(Gi Yong Lee) (Eumsound), 안태봉(Taebong An) (Orca Recording Studio)",
          "mixed, mastered by Manny Park (SIG Recording's)",
        ],
      },
      {
        no: 2,
        title: "Riot",
        duration: "03:34",
        credits: [
          "written, arranged and performed by 카디(KARDI)",
          "produced by 카디(KARDI)",
          "recorded by 황린(Leen Hwang), 이동규(Dong Kyu Lee) (Eumsound), 안태봉(Taebong An) (Orca Recording Studio)",
          "mixed, mastered by Manny Park (SIG Recording's)",
        ],
      },
      {
        no: 3,
        title: "WatchOut",
        duration: "02:57",
        credits: [
          "written, arranged and performed by 카디(KARDI)",
          "produced by 카디(KARDI)",
          "recorded by 황린(Leen Hwang), 박정호(Jung Ho Park) (Titan recording studio)",
          "mixed, mastered by Manny Park (SIG Recording's)",
        ],
      },
      {
        no: 4,
        title: "칠(Chil)",
        duration: "03:43",
        credits: [
          "written, arranged and performed by 카디(KARDI)",
          "produced by 카디(KARDI)",
          "drum programmed by 전성배(Holygrail)",
          "recorded by 이지영(Gi Yong Lee) (Eumsound), 박정호(Jung Ho Park) (Titan recording studio)",
          "mixed, mastered by Manny Park (SIG Recording's)",
        ],
      },
      {
        title: "[Credit]",
        duration: "",
        credits: [
          "카디(KARDI)",
          "미니앨범 '칠(Chil)'",
          "보컬(Vocal) 김예지(Yeji Kim)",
          "기타(Guitar) 황린(Leen Hwang)",
          "거문고(Geomungo) 박다울(Dawool Park)",
          "베이스(Bass) 황인규(Inkyu Hwang)",
          "드럼(Drum) 전성배(Holygrail)",
          "executive produce by SGMRECORDS Co., Ltd.",
          "co. executive produce by NEXTLEVELPARTNERS Co., Ltd.",
          "chief executive officer 이명재(Myoung Jae Lee)",
          "co. executive officer 최영근(Youngguen Choi)",
          "chief producer 박기태(Gitae Park)",
          "a&r 손수민(Sumin Son)",
          "assistant manager 백득성(Deuksung Baek)",
          "visual creator 주수현(Suhyeon Ju)",
        ],
      },
    ],
  },
];
