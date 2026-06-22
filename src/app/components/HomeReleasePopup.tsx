import { useEffect, useRef, useState } from "react";
import embersCover from "../../../album_cover/embers.png";
import { kardiSocialLinks } from "@/app/components/socialLinks";
import "./HomeReleasePopup.css";

const popupStorageKey = "kardi-home-release-popup-seen-v1";
const youtubeUrl = kardiSocialLinks.find(({ label }) => label === "YouTube")?.href ?? "";
const spotifyUrl = kardiSocialLinks.find(({ label }) => label === "Spotify")?.href ?? "";

const releasePlatforms = [
  { label: "YouTube Music", href: youtubeUrl },
  { label: "Spotify", href: spotifyUrl },
  { label: "Apple Music", href: "" },
  { label: "Melon", href: "" },
  { label: "Genie", href: "" },
  { label: "FLO", href: "" },
] as const;

function ExternalArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 18 18 6M8 6h10v10" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function PlatformItem({ label, href }: { label: string; href: string }) {
  const content = (
    <>
      <span>{label}</span>
      <ExternalArrow />
    </>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="home-release-platform">
      {content}
    </a>
  ) : (
    <span className="home-release-platform is-disabled" aria-disabled="true">
      {content}
    </span>
  );
}

export function HomeReleasePopup() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(popupStorageKey) !== "true") setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const closePopup = () => {
    try {
      window.localStorage.setItem(popupStorageKey, "true");
    } catch {
      // The popup can still close when browser storage is unavailable.
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="home-release-popup"
      role="dialog"
      aria-modal="true"
      aria-labelledby="home-release-title"
      onClick={closePopup}
    >
      <header className="home-release-header">
        <button ref={closeButtonRef} type="button" onClick={closePopup}>
          Close
        </button>
      </header>

      <div className="home-release-body" onClick={(event) => event.stopPropagation()}>
        <div className="home-release-heading">
          <p>Embers (ARC WORLD TOUR 2025-2026 FINALS Official Anthem)</p>
          <h2 id="home-release-title">
            New Album
            <br />
            Out Now
          </h2>
        </div>

        <div className="home-release-main">
          <img src={embersCover} alt="Embers album cover" className="home-release-cover" />

          <div className="home-release-actions">
            <div className="home-release-platforms">
              <div>
                {releasePlatforms.slice(0, 3).map((platform) => (
                  <PlatformItem key={platform.label} {...platform} />
                ))}
              </div>
              <div>
                {releasePlatforms.slice(3).map((platform) => (
                  <PlatformItem key={platform.label} {...platform} />
                ))}
              </div>
            </div>

            <a href={youtubeUrl} target="_blank" rel="noreferrer" className="home-release-watch">
              Watch MV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
