import svgPaths from "./svg-478htdyu4z";
import imgIcon from "./afd586037fd37cf204c30da1321f68d986913b90.png";

function NewsTitles() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Bebas_Neue:Regular',sans-serif] items-center justify-between leading-[0.8] not-italic relative shrink-0 text-[36px] text-white w-[1200px] whitespace-nowrap" data-name="News titles">
      <p className="relative shrink-0">YOUTUBE</p>
      <p className="relative shrink-0">INSTAGRAM</p>
      <p className="relative shrink-0">X</p>
      <p className="relative shrink-0">spotify</p>
    </div>
  );
}

function NewsHeader() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[1872px]" data-name="News header">
      <NewsTitles />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="h-[220px] relative shrink-0 w-[1200px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1200 220">
          <path d={svgPaths.p35e1c880} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <NewsHeader />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start justify-center relative shrink-0 w-[68px]" data-name="Icon container">
      <div className="h-[48px] relative shrink-0 w-[50px]" data-name="Icon">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[133.33%] left-[-14.52%] max-w-none top-[-16.67%] w-[129.03%]" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[36px] text-center text-white uppercase whitespace-nowrap">DISCOGRAPHY</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[36px] text-center text-white uppercase whitespace-nowrap">{`LIVES & EVENTS`}</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[36px] text-center text-white uppercase whitespace-nowrap">VIDEO</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[36px] text-center text-white uppercase whitespace-nowrap">MERCH</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[36px] text-center text-white uppercase whitespace-nowrap">ARCHIVE</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="Navigation">
      <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[36px] text-center text-white uppercase whitespace-nowrap">Profile</p>
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame">
          <path d={svgPaths.p2535c700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LanguageContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[68px]" data-name="Language container">
      <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[36px] text-white whitespace-nowrap">KO</p>
      <Frame />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute content-stretch flex h-[100px] items-center justify-between left-0 px-[24px] py-[15px] top-0 w-[1920px]" data-name="헤더">
      <IconContainer />
      <Navigation />
      <LanguageContainer />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="content-stretch flex flex-col items-end justify-end p-[24px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(-90deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.72) 30%, rgba(0, 0, 0, 0.2) 65%, rgba(0, 0, 0, 0) 100%)" }} data-name="Hero">
      <Container />
      <Component />
    </div>
  );
}