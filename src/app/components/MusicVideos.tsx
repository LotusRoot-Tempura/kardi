import { type CSSProperties, useEffect, useRef, useState } from "react";
import "./MusicVideos.css";

type MusicVideo = {
  id: string;
  title: string;
};

type VideoCardStyle = CSSProperties & {
  "--mobile-x": string;
  "--desktop-x": string;
  "--mobile-scale": number;
  "--desktop-scale": number;
  "--video-opacity": number;
  "--video-z": number;
};

const musicVideos: MusicVideo[] = [
  { id: "4hn0aRArAtw", title: "KARDI - TOKKEBI-BULL (Music Video)" },
  { id: "j3W_kRLDiqw", title: "KARDI(카디) - Player 1 (Music Video)" },
  { id: "kbx0sg4S1cg", title: "KARDI(카디) - Not But Disco (Music Video)" },
  { id: "euNSaeQ6D4o", title: "KARDI - No Need (Music Video)" },
  { id: "qIRQpUkDpz4", title: "KARDI(카디) - Havin' a Good Time (Music Video)" },
  { id: "rLPWyVtuWDQ", title: "KARDI(카디) - Skybound (Music Video)" },
  { id: "NEC7dOxsRI0", title: "KARDI(카디) - PARTY (Music Video)" },
  { id: "ostJzgQp7zA", title: "KARDI(카디) - WatchOut (Music Video)" },
];

function wrapIndex(index: number) {
  return (index + musicVideos.length) % musicVideos.length;
}

function getCircularOffset(index: number, activeIndex: number) {
  let offset = index - activeIndex;
  const halfwayPoint = Math.floor(musicVideos.length / 2);

  if (offset > halfwayPoint) offset -= musicVideos.length;
  if (offset < -halfwayPoint) offset += musicVideos.length;

  return offset;
}

function getDesktopPosition(offset: number) {
  if (offset === 0) return 0;
  return Math.sign(offset) * (774 + (Math.abs(offset) - 1) * 524);
}

function getMobilePosition(offset: number) {
  if (offset === 0) return "0vw";
  return `${Math.sign(offset) * (68 + (Math.abs(offset) - 1) * 58)}vw`;
}

function getThumbnailUrl(videoId: string, quality = "maxresdefault") {
  return `https://i.ytimg.com/vi/${videoId}/${quality}.jpg`;
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" className={`size-6 md:size-12 ${direction === "left" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 48 48">
      <path d="m19 12 12 12-12 12" stroke="currentColor" strokeLinecap="square" strokeWidth="2" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" className="size-14 md:size-20" fill="none" viewBox="0 0 80 80">
      <circle cx="40" cy="40" r="37.5" stroke="currentColor" strokeWidth="3" />
      <path d="m33 26 22 14-22 14V26Z" fill="currentColor" />
    </svg>
  );
}

function VideoModal({ video, onClose }: { video: MusicVideo; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-black/85 p-4 md:p-12"
      role="dialog"
      aria-modal="true"
      aria-label={`${video.title} video player`}
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type="button"
        className="absolute right-4 top-4 z-10 font-display text-2xl uppercase text-white transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-6 md:top-6 md:text-4xl"
        onClick={onClose}
      >
        Close
      </button>

      <div className="aspect-video w-full max-w-[1200px] cursor-default overflow-hidden bg-black" onClick={(event) => event.stopPropagation()}>
        <iframe
          className="size-full border-0"
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
          title={video.title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export function MusicVideos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<MusicVideo | null>(null);
  const touchStartX = useRef<number | null>(null);
  const activeVideo = musicVideos[activeIndex];

  const move = (direction: number) => {
    setActiveIndex((currentIndex) => wrapIndex(currentIndex + direction));
  };

  return (
    <>
      <section
        id="video"
        aria-labelledby="video-title"
        className="relative z-10 flex w-full flex-col items-center gap-6 overflow-hidden bg-black px-4 py-24 text-[#f7f7f7] md:gap-[72px] md:px-6 md:py-[120px]"
      >
        <h2 id="video-title" className="font-display text-[32px] font-normal uppercase leading-none md:text-[56px] md:leading-[0.8]">
          Video
        </h2>

        <div
          className="flex w-full touch-pan-y flex-col items-center gap-4 outline-none md:gap-6"
          role="region"
          aria-roledescription="carousel"
          aria-label="KARDI music videos"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") move(-1);
            if (event.key === "ArrowRight") move(1);
          }}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;

            const distance = event.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;

            if (Math.abs(distance) < 50) return;
            move(distance > 0 ? -1 : 1);
          }}
        >
          <div className="music-videos-track">
            {musicVideos.map((video, videoIndex) => {
              const offset = getCircularOffset(videoIndex, activeIndex);
              const distance = Math.abs(offset);
              const isActive = offset === 0;
              const isVisible = distance <= 2;
              const cardStyle: VideoCardStyle = {
                "--mobile-x": getMobilePosition(offset),
                "--desktop-x": `${getDesktopPosition(offset)}px`,
                "--mobile-scale": isActive ? 1 : 0.58,
                "--desktop-scale": isActive ? 1 : 0.5,
                "--video-opacity": isActive ? 1 : distance === 1 ? 0.5 : distance === 2 ? 0.2 : 0,
                "--video-z": 10 - distance,
                pointerEvents: isVisible ? "auto" : "none",
              };

              return (
                <button
                  key={video.id}
                  type="button"
                  className={`music-videos-card ${isActive ? "music-videos-card--active" : ""}`}
                  style={cardStyle}
                  onClick={() => {
                    if (isActive) setPlayingVideo(video);
                    else setActiveIndex(videoIndex);
                  }}
                  tabIndex={isVisible ? 0 : -1}
                  aria-current={isActive ? "true" : undefined}
                  aria-hidden={!isVisible}
                  aria-label={isActive ? `Play ${video.title}` : `Show ${video.title}`}
                >
                  <img
                    src={getThumbnailUrl(video.id)}
                    alt={isActive ? `${video.title} thumbnail` : ""}
                    className="music-videos-card-image"
                    draggable={false}
                    loading="eager"
                    decoding="async"
                    onError={(event) => {
                      const fallbackUrl = getThumbnailUrl(video.id, "hqdefault");
                      if (event.currentTarget.src !== fallbackUrl) event.currentTarget.src = fallbackUrl;
                    }}
                  />
                  {isActive && (
                    <span className="music-videos-play-icon">
                      <PlayIcon />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex h-[34px] w-full max-w-[1000px] items-center justify-center gap-2 md:h-[72px]">
            <button
              type="button"
              className="flex shrink-0 items-center justify-center transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => move(-1)}
              aria-label="Previous video"
            >
              <ArrowIcon direction="left" />
            </button>

            <p className="flex h-full min-w-0 flex-1 items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap text-center font-display text-base uppercase leading-none md:text-4xl" aria-live="polite">
              <span key={activeVideo.id} className="music-videos-title-text overflow-hidden text-ellipsis">
                {activeVideo.title}
              </span>
            </p>

            <button
              type="button"
              className="flex shrink-0 items-center justify-center transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => move(1)}
              aria-label="Next video"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      </section>

      {playingVideo && <VideoModal video={playingVideo} onClose={() => setPlayingVideo(null)} />}
    </>
  );
}
