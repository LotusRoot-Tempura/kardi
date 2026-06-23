import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation, useNavigate } from "react-router";
import { Archive } from "@/app/components/Archive";
import { ArchivePage } from "@/app/components/ArchivePage";
import { ArchiveDetailPage } from "@/app/components/ArchiveDetailPage";
import { Discography } from "@/app/components/Discography";
import { DiscographyDetailPage } from "@/app/components/DiscographyDetailPage";
import { DiscographyPage } from "@/app/components/DiscographyPage";
import { Footer } from "@/app/components/Footer";
import { HomeReleasePopup } from "@/app/components/HomeReleasePopup";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { LiveEvents } from "@/app/components/LiveEvents";
import { LiveEventDetailPage } from "@/app/components/LiveEventDetailPage";
import { Merch } from "@/app/components/Merch";
import { MusicVideos } from "@/app/components/MusicVideos";
import { Profile } from "@/app/components/Profile";
import { kardiSocialLinks } from "@/app/components/socialLinks";
import svgPaths from "@/imports/Hero/svg-478htdyu4z";
import markIcon from "@/imports/Hero/afd586037fd37cf204c30da1321f68d986913b90.png";
import menuTexture from "@/imports/MenuClick/34763e1d743bc3ee75f9091120bd3ab719c293d1.png";

const heroVideoUrl = "https://dev-file-v2.goodduck.xyz/feed/video/f6b5286b94284378b40e1a358f13b7d3.mp4";

type NavigationItem =
  | { label: string; type: "page"; to: string }
  | { label: string; type: "section"; sectionId: string };

const homeNavigationItem: NavigationItem = { label: "Home", type: "section", sectionId: "home" };
const navItems: NavigationItem[] = [
  { label: "Profile", type: "page", to: "/profile" },
  { label: "Discography", type: "section", sectionId: "discography" },
  { label: "Lives & Events", type: "section", sectionId: "lives-events" },
  { label: "Video", type: "section", sectionId: "video" },
  { label: "Merch", type: "section", sectionId: "merch" },
  { label: "Archive", type: "section", sectionId: "archive" },
];

function getScrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: getScrollBehavior(), block: "start" });
}

function useDarkHeaderOnLightSections() {
  const [isDark, setIsDark] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    let animationFrame = 0;

    const updateHeaderTheme = () => {
      animationFrame = 0;
      const headerHeight = window.innerWidth >= 768 ? 100 : 40;
      const headerProbeY = headerHeight / 2;
      const lightSections = document.querySelectorAll<HTMLElement>("[data-gnb-theme='dark']");
      const shouldUseDarkHeader = Array.from(lightSections).some((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= headerProbeY && bounds.bottom >= headerProbeY;
      });

      setIsDark(shouldUseDarkHeader);
    };

    const scheduleUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateHeaderTheme);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [pathname]);

  return isDark;
}

function ArtistMark() {
  return (
    <ImageWithFallback
      src={markIcon}
      alt="Artist mark"
      className="artist-mark h-6 w-6 object-contain md:h-12 md:w-[50px]"
    />
  );
}

function Wordmark() {
  return (
    <svg
      aria-label="KARD"
      className="w-full max-w-[1200px] text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.06)]"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1200 220"
    >
      <path d={svgPaths.p35e1c880} fill="currentColor" />
    </svg>
  );
}

function NavigationLink({ item, className, onNavigate }: { item: NavigationItem; className: string; onNavigate?: () => void }) {
  const location = useLocation();
  const navigate = useNavigate();

  if (item.type === "page") {
    return (
      <Link to={item.to} className={className} onClick={onNavigate}>
        {item.label}
      </Link>
    );
  }

  const hash = `#${item.sectionId}`;

  return (
    <a
      href={`${import.meta.env.BASE_URL}${hash}`}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        onNavigate?.();

        if (location.pathname === "/" && location.hash === hash) {
          scrollToSection(item.sectionId);
          return;
        }

        navigate(`/${hash}`);
      }}
    >
      {item.label}
    </a>
  );
}

function SmoothScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      if (hash) {
        scrollToSection(decodeURIComponent(hash.slice(1)));
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [pathname, hash]);

  return null;
}

function Header({ menuOpen, dark, onOpenMenu }: { menuOpen: boolean; dark: boolean; onOpenMenu: () => void }) {
  const { pathname } = useLocation();
  const hasSolidMobileHeader = pathname === "/profile" || pathname === "/archive" || pathname === "/discography";

  return (
    <header
      className={`fixed left-0 top-0 z-50 flex h-10 w-full items-center justify-between px-2 transition-colors duration-300 md:h-[100px] md:px-6 ${dark ? "text-black" : "text-white"} ${hasSolidMobileHeader ? "site-header--mobile-solid" : ""}`}
    >
      <Link to="/" className="flex w-[50px] items-center md:w-[68px]" aria-label="Home">
        <ArtistMark />
      </Link>

      <nav className="hidden items-center gap-7 xl:gap-10 md:flex" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavigationLink
            key={item.label}
            item={item}
            className="font-display whitespace-nowrap text-2xl uppercase leading-[1.5] transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current lg:text-3xl xl:text-4xl"
          />
        ))}
      </nav>

      <button
        type="button"
        className="font-display text-2xl uppercase leading-[0.8] transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current md:hidden"
        onClick={onOpenMenu}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        Menu
      </button>

      <button
        type="button"
        className="hidden items-center font-display text-2xl uppercase leading-[1.5] transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current md:flex lg:text-3xl xl:text-4xl"
        aria-label="Change language"
      >
        KO
        <svg className="h-10 w-10" fill="none" viewBox="0 0 40 40" aria-hidden="true">
          <path d={svgPaths.p2535c700} fill="currentColor" />
        </svg>
      </button>
    </header>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <aside
      id="mobile-menu"
      aria-hidden={!open}
      className={`fixed inset-0 z-[70] flex flex-col items-center justify-between overflow-hidden px-4 py-[200px] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-white">
        <ImageWithFallback src={menuTexture} alt="Concrete paper texture" className="h-full w-full object-cover opacity-50" />
      </div>

      <button
        type="button"
        className="absolute right-2 top-2 font-display text-2xl uppercase leading-[0.8] text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
        onClick={onClose}
      >
        Close
      </button>

      <div className="flex flex-col items-center gap-[29px]">
        {[homeNavigationItem, ...navItems].map((item) => (
          <NavigationLink
            key={item.label}
            item={item}
            onNavigate={onClose}
            className="font-display text-[32px] uppercase leading-none text-black transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          />
        ))}
      </div>

      <button
        type="button"
        className="absolute bottom-2 right-2 flex items-center gap-1 font-display text-2xl uppercase leading-[0.8] text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
      >
        <span className="inline-block h-0 w-0 border-x-[5px] border-t-[5px] border-x-transparent border-t-black" aria-hidden="true" />
        KO
      </button>
    </aside>
  );
}

function HomePage() {
  return (
    <>
      <HomeReleasePopup />
      <main className="relative min-h-screen overflow-x-hidden bg-background font-display text-foreground">
        <section
          id="home"
          className="relative flex min-h-[100svh] flex-col items-end justify-end overflow-hidden bg-black px-4 pb-[calc(56px+env(safe-area-inset-bottom))] pt-28 md:min-h-screen md:px-6 md:pb-6"
        >
          <div className="absolute inset-0 bg-black" aria-hidden="true">
            <video className="h-full w-full object-cover opacity-[0.55]" autoPlay loop muted playsInline preload="auto">
              <source src={heroVideoUrl} type="video/mp4" />
            </video>
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.055),transparent_28%),linear-gradient(90deg,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0)_24%,rgba(0,0,0,0)_76%,rgba(0,0,0,0.58)_100%),linear-gradient(0deg,#000_0%,rgba(0,0,0,0.72)_30%,rgba(0,0,0,0.2)_65%,rgba(0,0,0,0)_100%)]"
          />
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:7px_7px]" />

          <div className="relative z-10 flex w-full flex-col items-center gap-4 md:gap-6">
            <Wordmark />
            <div className="flex w-full max-w-[1200px] items-center justify-between text-white">
              {kardiSocialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-base uppercase leading-[0.8] transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:text-4xl"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <Discography />
        <LiveEvents />
        <MusicVideos />
        <Merch />
        <Archive />
      </main>
      <Footer />
    </>
  );
}

function ProfilePage() {
  return (
    <>
      <Profile />
      <Footer />
    </>
  );
}

function SectionPage({ title }: { title: string }) {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-24 text-white md:px-6 md:py-[120px]">
        <h1 className="font-display text-[56px] font-normal uppercase leading-none md:text-[96px]">{title}</h1>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const darkHeader = useDarkHeaderOnLightSections();
  const isArchiveDetail = pathname.startsWith("/archive/");
  const isDiscographyDetail = pathname.startsWith("/discography/");
  const isLiveEventDetail = pathname.startsWith("/live-events/");

  return (
    <>
      <SmoothScrollManager />
      {!isArchiveDetail && !isDiscographyDetail && !isLiveEventDetail && (
        <>
          <Header menuOpen={menuOpen} dark={darkHeader} onOpenMenu={() => setMenuOpen(true)} />
          <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/discography"
          element={
            <>
              <DiscographyPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/discography/:albumId"
          element={
            <>
              <DiscographyDetailPage />
              <Footer />
            </>
          }
        />
        <Route path="/live-events" element={<SectionPage title="Live & Events" />} />
        <Route
          path="/live-events/:calendarId"
          element={
            <>
              <LiveEventDetailPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/archive"
          element={
            <>
              <ArchivePage />
              <Footer />
            </>
          }
        />
        <Route path="/archive/:collectionId" element={<ArchiveDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
