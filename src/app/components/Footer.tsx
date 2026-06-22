import svgPaths from "@/imports/Hero/svg-478htdyu4z";
import { kardiSocialLinks } from "@/app/components/socialLinks";

const agencyInformation = [
  "소속사  (주)플래닛케이",
  "대표  황인규",
  "사업자등록번호 725-87-03301",
  "이메일  bandkardi@gmail.com",
];

const serviceInformation = [
  "서비스 운영 (주)폰드메이커스",
  "대표 박이래",
  "사업자등록번호 580-87-02446",
  "통신판매업신고번호 2025-대구달성-0541",
  "주소 대구광역시 달성군 화원읍 성천로 5 달성군여성문화복지센터 4층 407호",
  "고객센터 070-4045-1991",
  "이메일 contact@pondmakers.com",
];

function FooterWordmark() {
  return (
    <svg aria-label="KARDI" className="aspect-[1200/220] w-full max-w-[1200px] text-white" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1200 220">
      <path d={svgPaths.p35e1c880} fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="overflow-hidden bg-black text-white">
      <div className="flex w-full flex-col items-start gap-4 px-4 py-24 md:items-center md:gap-6 md:px-6 md:py-[120px]">
        <FooterWordmark />

        <nav className="flex w-full max-w-[1200px] items-center justify-between font-display text-base uppercase leading-[0.8] md:text-4xl" aria-label="KARDI social media">
          {kardiSocialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4 px-4 pb-4 text-center md:px-6 md:pb-6" style={{ fontFamily: '"Pretendard Variable", sans-serif' }}>
        <div className="flex w-full flex-wrap items-start justify-center gap-x-4 gap-y-0.5 text-[13px] font-bold leading-[1.5] md:gap-4 md:text-[15px]">
          {agencyInformation.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <div className="flex w-full max-w-[1200px] flex-wrap items-start justify-center gap-x-4 gap-y-0.5 text-[13px] leading-[1.5] text-white/50 md:gap-x-6 md:gap-y-1 md:text-[15px]">
            {serviceInformation.map((item) => (
              <span key={item} className={item.startsWith("주소") ? "w-full md:w-auto" : "whitespace-nowrap"}>
                {item}
              </span>
            ))}
          </div>

          <div className="flex items-start justify-center gap-6 whitespace-nowrap text-[13px] font-bold leading-[1.5] md:text-[15px]">
            <span>이용약관</span>
            <span>개인정보처리방침</span>
          </div>
        </div>

        <p className="whitespace-nowrap text-[13px] font-bold leading-[1.5] md:text-[15px]">© 2026 GOODDUCK. All rights reserved.</p>
      </div>
    </footer>
  );
}
