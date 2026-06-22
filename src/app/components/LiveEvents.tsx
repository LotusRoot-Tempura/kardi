import { type CSSProperties, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import liveEventBackground from "../../../live_event_bg.png";
import scheduleEmpty from "../../../schedule_empty.png";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import {
  type Schedule,
  formatScheduleDate,
  getFeaturedSchedules,
  getTagLabel,
} from "@/app/components/scheduleData";
import { ViewMoreButton } from "@/app/components/ViewMoreButton";
import "./LiveEvents.css";

type ViewMode = "carousel" | "list";

type CarouselTrackStyle = CSSProperties & {
  "--mobile-center": string;
  "--desktop-center": string;
};

function wrapIndex(index: number, itemCount: number) {
  return (index + itemCount) % itemCount;
}

function ArrowIcon({ direction, diagonal = false }: { direction?: "left" | "right"; diagonal?: boolean }) {
  if (diagonal) {
    return (
      <svg aria-hidden="true" className="size-8" fill="none" viewBox="0 0 32 32">
        <path d="M9 23 23 9M12 9h11v11" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className={`size-6 md:size-12 ${direction === "left" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 48 48">
      <path d="m19 12 12 12-12 12" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function TileIcon() {
  return (
    <svg aria-hidden="true" className="size-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <path d="M8 6h12M8 12h12M8 18h12" stroke="currentColor" strokeWidth="2" />
      <path d="M4 6h1M4 12h1M4 18h1" stroke="currentColor" strokeLinecap="square" strokeWidth="2" />
    </svg>
  );
}

function ViewToggle({ viewMode, onChange }: { viewMode: ViewMode; onChange: (mode: ViewMode) => void }) {
  return (
    <div className="absolute right-4 top-6 z-30 flex items-center gap-3 rounded-full bg-black/30 px-3 py-2 md:right-0 md:top-[2px]" aria-label="Live events view">
      <button
        type="button"
        className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b00020] ${viewMode === "carousel" ? "text-black" : "text-white/75"}`}
        onClick={() => onChange("carousel")}
        aria-label="Carousel view"
        aria-pressed={viewMode === "carousel"}
      >
        <TileIcon />
      </button>
      <button
        type="button"
        className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b00020] ${viewMode === "list" ? "text-black" : "text-white/75"}`}
        onClick={() => onChange("list")}
        aria-label="List view"
        aria-pressed={viewMode === "list"}
      >
        <ListIcon />
      </button>
    </div>
  );
}

function ScheduleCopy({ schedule, linked = false }: { schedule: Schedule; linked?: boolean }) {
  const content = (
    <>
      <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">{getTagLabel(schedule.tag)}</p>
      <p className="max-h-[2em] w-full overflow-hidden text-ellipsis">{schedule.title}</p>
      <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">{formatScheduleDate(schedule.scheduleDate)}</p>
    </>
  );

  const className =
    "live-events-copy flex min-w-0 flex-1 flex-col items-center justify-center gap-2 text-center font-display text-base uppercase leading-none tracking-[0.01em] text-inherit no-underline md:text-4xl";

  return linked ? (
    <Link to={`/live-events/${schedule.calendarId}`} className={className} aria-label={`View ${schedule.title} event details`}>
      {content}
    </Link>
  ) : (
    <div className={className}>{content}</div>
  );
}

function CarouselView({ schedules }: { schedules: Schedule[] }) {
  const itemCount = schedules.length;
  const [activeVirtualIndex, setActiveVirtualIndex] = useState(itemCount);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const activeVirtualIndexRef = useRef(itemCount);
  const settleTimer = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const activeSchedule = schedules[wrapIndex(activeVirtualIndex, itemCount)];
  const repeatedSchedules = Array.from({ length: itemCount * 3 }, (_, virtualIndex) => ({
    schedule: schedules[virtualIndex % itemCount],
    virtualIndex,
  }));
  const trackStyle: CarouselTrackStyle = {
    "--mobile-center": `${activeVirtualIndex * 266 + 150}px`,
    "--desktop-center": `${activeVirtualIndex * 424 + 300}px`,
  };

  const settleInfiniteTrack = () => {
    const currentIndex = activeVirtualIndexRef.current;
    let resetIndex = currentIndex;

    if (currentIndex < itemCount) resetIndex += itemCount;
    if (currentIndex >= itemCount * 2) resetIndex -= itemCount;

    if (resetIndex !== currentIndex) {
      setTransitionEnabled(false);
      activeVirtualIndexRef.current = resetIndex;
      setActiveVirtualIndex(resetIndex);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
    }

    setIsAnimating(false);
  };

  const queueTrackSettlement = () => {
    if (settleTimer.current !== null) window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(settleInfiniteTrack, 700);
  };

  const move = (direction: number) => {
    if (isAnimating) return;
    const nextIndex = activeVirtualIndexRef.current + direction;
    activeVirtualIndexRef.current = nextIndex;
    setIsAnimating(true);
    setActiveVirtualIndex(nextIndex);
    queueTrackSettlement();
  };

  const moveTo = (virtualIndex: number) => {
    if (isAnimating || virtualIndex === activeVirtualIndexRef.current) return;
    activeVirtualIndexRef.current = virtualIndex;
    setIsAnimating(true);
    setActiveVirtualIndex(virtualIndex);
    queueTrackSettlement();
  };

  useEffect(() => {
    return () => {
      if (settleTimer.current !== null) window.clearTimeout(settleTimer.current);
    };
  }, []);

  return (
    <div
      className="flex w-full touch-pan-y flex-col items-center gap-4 outline-none md:gap-6"
      role="region"
      aria-roledescription="carousel"
      aria-label="KARDI live events"
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
        if (Math.abs(distance) >= 50) move(distance > 0 ? -1 : 1);
      }}
    >
      <div className="live-events-track">
        <div
          className={`live-events-strip ${transitionEnabled ? "" : "live-events-strip--instant"}`}
          style={trackStyle}
          onTransitionEnd={(event) => {
            if (event.target === event.currentTarget && event.propertyName === "transform") {
              if (settleTimer.current !== null) window.clearTimeout(settleTimer.current);
              settleInfiniteTrack();
            }
          }}
        >
          {repeatedSchedules.map(({ schedule, virtualIndex }) => {
            const distance = Math.abs(virtualIndex - activeVirtualIndex);
            const isActive = virtualIndex === activeVirtualIndex;
            const isNearViewport = distance <= 2;

            const image = (
              <ImageWithFallback
                src={schedule.imageUrl || scheduleEmpty}
                alt={isActive ? `${schedule.title} event poster` : ""}
                className="size-full object-cover"
                draggable={false}
                loading="eager"
                decoding="async"
              />
            );

            return isActive ? (
              <Link
                key={`${Math.floor(virtualIndex / itemCount)}-${schedule.calendarId}`}
                to={`/live-events/${schedule.calendarId}`}
                className="live-events-slide live-events-slide--active"
                aria-current="true"
                aria-label={`View ${schedule.title} event details`}
              >
                {image}
              </Link>
            ) : (
              <button
                key={`${Math.floor(virtualIndex / itemCount)}-${schedule.calendarId}`}
                type="button"
                className="live-events-slide"
                onClick={() => moveTo(virtualIndex)}
                tabIndex={isNearViewport ? 0 : -1}
                aria-hidden={!isNearViewport}
                aria-label={`Show ${schedule.title}`}
              >
                {image}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex h-20 w-[300px] items-center justify-center gap-2 md:h-40 md:w-[600px]">
        <button type="button" className="shrink-0 transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b00020]" onClick={() => move(-1)} aria-label="Previous event">
          <ArrowIcon direction="left" />
        </button>
        <ScheduleCopy key={activeSchedule.calendarId} schedule={activeSchedule} linked />
        <button type="button" className="shrink-0 transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b00020]" onClick={() => move(1)} aria-label="Next event">
          <ArrowIcon direction="right" />
        </button>
      </div>
    </div>
  );
}

function ListView({ schedules }: { schedules: Schedule[] }) {
  return (
    <div className="flex w-full flex-col gap-4 md:gap-0">
      {schedules.map((schedule, index) => (
        <Link
          key={schedule.calendarId}
          to={`/live-events/${schedule.calendarId}`}
          className={`flex w-full flex-col items-center pb-4 text-center font-display text-base uppercase leading-[1.2] tracking-[0.01em] text-black no-underline md:grid md:h-[84px] md:grid-cols-[repeat(3,minmax(0,1fr))_32px] md:items-center md:gap-6 md:py-6 md:text-left md:text-4xl md:leading-none ${index < schedules.length - 1 ? "border-b-2 border-black" : ""}`}
        >
          <p className="overflow-hidden text-ellipsis whitespace-nowrap">{getTagLabel(schedule.tag)}</p>
          <p className="mt-2 max-w-full overflow-hidden text-ellipsis whitespace-nowrap md:mt-0">{schedule.title}</p>
          <p className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap md:mt-0">{formatScheduleDate(schedule.scheduleDate)}</p>
          <span className="hidden md:block" aria-hidden="true">
            <ArrowIcon diagonal />
          </span>
        </Link>
      ))}
    </div>
  );
}

const schedules = getFeaturedSchedules();

export function LiveEvents() {
  const [viewMode, setViewMode] = useState<ViewMode>("carousel");

  return (
    <section id="lives-events" data-gnb-theme="dark" aria-labelledby="live-events-title" className="relative flex w-full flex-col items-center gap-6 overflow-hidden px-4 py-24 text-black md:gap-[72px] md:px-6 md:py-[120px]">
      <div
        className="live-events-viewport-background"
        style={{ backgroundImage: `url(${liveEventBackground})` }}
        aria-hidden="true"
      />

      <div className="relative flex w-full items-center justify-center">
        <h2 id="live-events-title" className="font-display text-[32px] font-normal uppercase leading-none text-[#b00020] md:text-[56px] md:leading-[0.8]">
          <span className="md:hidden">Lives &amp; Events</span>
          <span className="hidden md:inline">Live &amp; Event</span>
        </h2>
        <ViewToggle viewMode={viewMode} onChange={setViewMode} />
      </div>

      <div className="relative w-full">
        <div className={viewMode === "carousel" ? "block" : "hidden"} aria-hidden={viewMode !== "carousel"}>
          <CarouselView schedules={schedules} />
        </div>
        <div className={viewMode === "list" ? "block" : "hidden"} aria-hidden={viewMode !== "list"}>
          <ListView schedules={schedules} />
        </div>
      </div>

      <ViewMoreButton to="/live-events" tone="dark" className="relative mt-12 md:mt-0" />
    </section>
  );
}
