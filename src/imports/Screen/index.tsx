import svgPaths from "./svg-gppmw8amuj";
import imgHeaderIcon from "./afd586037fd37cf204c30da1321f68d986913b90.png";

function SocialLinks() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Bebas_Neue:Regular',sans-serif] items-center justify-between leading-[0.8] not-italic relative shrink-0 text-[16px] text-white w-full whitespace-nowrap" data-name="Social Links">
      <p className="relative shrink-0">YOUTUBE</p>
      <p className="relative shrink-0">INSTAGRAM</p>
      <p className="relative shrink-0">X</p>
      <p className="relative shrink-0">spotify</p>
    </div>
  );
}

function SocialLinksContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Social Links Container">
      <div className="aspect-[1198/220] relative shrink-0 w-full" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 63">
          <path d={svgPaths.p3a292a00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <SocialLinks />
    </div>
  );
}

function SocialLinksContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Social Links Container">
      <SocialLinksContainer1 />
    </div>
  );
}

function HeaderIconContainer() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[50px]" data-name="Header Icon Container">
      <div className="h-[23px] relative shrink-0 w-[24px]" data-name="Header Icon">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[133.33%] left-[-14.52%] max-w-none top-[-16.67%] w-[129.03%]" src={imgHeaderIcon} />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 p-[8px] top-0 w-[375px]" data-name="헤더">
      <HeaderIconContainer />
      <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[0.8] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">menu</p>
    </div>
  );
}

function ViewMore() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[813px] items-center justify-end overflow-clip pb-[16px] pt-[120px] px-[16px] relative shrink-0 w-[375px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 51.32%, rgb(0, 0, 0) 100%)" }} data-name="VIEW MORE 버튼 클릭 시">
      <SocialLinksContainer />
      <Component />
      <p className="[word-break:break-word] absolute font-['Bebas_Neue:Regular',sans-serif] leading-[0.8] left-[16px] not-italic text-[16px] text-black top-[1183px] whitespace-nowrap">more</p>
    </div>
  );
}

export default function Screen() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Screen">
      <ViewMore />
    </div>
  );
}