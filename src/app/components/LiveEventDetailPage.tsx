import { Link, Navigate, useParams } from "react-router";
import liveEventBackground from "../../../live_event_bg.png";
import scheduleEmpty from "../../../schedule_empty.png";
import markIcon from "@/imports/Hero/afd586037fd37cf204c30da1321f68d986913b90.png";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ScheduleNotificationBar } from "@/app/components/ScheduleNotificationBar";
import {
  allSchedules,
  formatScheduleDate,
  formatScheduleTime,
  getTagLabel,
} from "@/app/components/scheduleData";
import "./LiveEventDetailPage.css";

export function LiveEventDetailPage() {
  const { calendarId } = useParams();
  const schedule = allSchedules.find((item) => item.calendarId === calendarId);

  if (!schedule) return <Navigate to="/#lives-events" replace />;

  const formattedTime = formatScheduleTime(schedule.scheduleTime);
  const content = schedule.content.trim();

  return (
    <main className="live-event-detail-page" aria-labelledby="live-event-detail-title">
      <div
        className="live-event-detail-viewport-background"
        style={{ backgroundImage: `url(${liveEventBackground})` }}
        aria-hidden="true"
      />

      <header className="live-event-detail-header">
        <Link to="/" aria-label="Home" className="live-event-detail-mark">
          <ImageWithFallback src={markIcon} alt="Artist mark" />
        </Link>
        <Link to="/#lives-events" className="live-event-detail-back">
          Back
        </Link>
      </header>

      <article className="live-event-detail-content">
        <div className="live-event-detail-heading">
          <p className="live-event-detail-meta">
            <span>{getTagLabel(schedule.tag)}</span>
            <span aria-hidden="true"> / </span>
            <time dateTime={schedule.scheduleDate}>{formatScheduleDate(schedule.scheduleDate)}</time>
            {formattedTime ? (
              <>
                <span aria-hidden="true"> / </span>
                <time>{formattedTime}</time>
              </>
            ) : null}
          </p>
          <h1 id="live-event-detail-title">{schedule.title}</h1>
        </div>

        <div className="live-event-detail-entry">
          <div className="live-event-detail-image">
            <ImageWithFallback
              src={schedule.imageUrl || scheduleEmpty}
              alt={`${schedule.title} event poster`}
              className="size-full object-cover"
              decoding="async"
            />
          </div>

          {content ? <p className="live-event-detail-body">{content}</p> : null}
        </div>
      </article>

      <ScheduleNotificationBar />
    </main>
  );
}
