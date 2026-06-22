import imgMenu from "./34763e1d743bc3ee75f9091120bd3ab719c293d1.png";

function Component() {
  return (
    <div className="absolute content-stretch flex items-center justify-end left-0 p-[8px] top-0 w-[375px]" data-name="헤더">
      <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[0.8] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">CLOSE</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M12 15L7 10.0167H17L12 15Z" fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Language() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Language">
      <Frame />
      <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[0.8] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap">KO</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-end left-0 p-[8px] top-[773px] w-[375px]" data-name="헤더">
      <Language />
    </div>
  );
}

export default function Menu() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between px-[16px] py-[200px] relative size-full" data-name="MENU 클릭 시">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-50 size-full" src={imgMenu} />
      </div>
      <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[32px] text-black text-center whitespace-nowrap">home</p>
      <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[32px] text-black text-center whitespace-nowrap">Profile</p>
      <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[32px] text-black text-center whitespace-nowrap">DISCOGRAPHY</p>
      <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[32px] text-black text-center whitespace-nowrap">{`LIVES & EVENTS`}</p>
      <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[32px] text-black text-center whitespace-nowrap">VIDEO</p>
      <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[32px] text-black text-center whitespace-nowrap">MERCH</p>
      <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[36px] text-black text-center uppercase whitespace-nowrap">ARCHIVE</p>
      <Component />
      <Component1 />
    </div>
  );
}