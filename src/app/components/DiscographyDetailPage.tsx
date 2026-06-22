import { Link, Navigate, useParams } from "react-router";
import { ARTIST_DISCOGRAPHIES, type DiscographyTrack } from "../../../Discography";
import discographyBackground from "../../../live_event_bg.png";
import markIcon from "@/imports/Hero/afd586037fd37cf204c30da1321f68d986913b90.png";
import { discographyPageItems } from "@/app/components/discographyPageData";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import "./DiscographyDetailPage.css";

function TrackSection({ track, index }: { track: DiscographyTrack; index: number }) {
  const isCredit = track.title.toLowerCase() === "[credit]";
  const trackNumber = track.no ?? index + 1;

  return (
    <section className={`discography-detail-track-section${isCredit ? " is-credit" : ""}`}>
      <h2>
        {isCredit ? track.title : `${String(trackNumber).padStart(2, "0")}. ${track.title}`}
        {!isCredit && track.isTitle ? <span className="discography-detail-title-mark"> Title</span> : null}
      </h2>

      {track.duration ? <p className="discography-detail-duration">{track.duration}</p> : null}
      {track.description ? <p className="discography-detail-track-description">{track.description}</p> : null}

      {track.credits.length > 0 ? (
        <div className="discography-detail-credits">
          {track.credits.map((credit, creditIndex) => (
            <p key={`${creditIndex}:${credit}`}>{credit}</p>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export function DiscographyDetailPage() {
  const { albumId } = useParams();
  const numericAlbumId = Number(albumId);
  const album = ARTIST_DISCOGRAPHIES.find((item) => item.id === numericAlbumId);
  const listItem = discographyPageItems.find((item) => item.id === numericAlbumId);

  if (!album || !listItem) return <Navigate to="/discography" replace />;

  return (
    <main className="discography-detail-page" aria-labelledby="discography-detail-title">
      <div
        className="discography-detail-viewport-background"
        style={{ backgroundImage: `url(${discographyBackground})` }}
        aria-hidden="true"
      />

      <header className="discography-detail-header">
        <Link to="/" aria-label="Home" className="discography-detail-mark">
          <ImageWithFallback src={markIcon} alt="Artist mark" />
        </Link>
        <Link to="/discography" className="discography-detail-back">
          Back
        </Link>
      </header>

      <article className="discography-detail-content">
        <div className="discography-detail-heading">
          <p className="discography-detail-meta">
            <time dateTime={album.releaseDate.replaceAll(".", "-")}>{album.releaseDate}</time>
            <span aria-hidden="true"> / </span>
            <span>{album.type}</span>
            <span aria-hidden="true"> / </span>
            <span>
              {listItem.trackCount} {listItem.trackCount === 1 ? "Track" : "Tracks"}
            </span>
          </p>
          <h1 id="discography-detail-title">{album.title}</h1>
        </div>

        <div className="discography-detail-album">
          <div className="discography-detail-cover">
            <img src={album.cover} alt={`${album.title} album cover`} decoding="async" />
          </div>

          <div className="discography-detail-information">
            {album.description ? <p className="discography-detail-description">{album.description}</p> : null}
            {album.tracks.map((track, index) => (
              <TrackSection key={`${track.no ?? "credit"}:${track.title}:${index}`} track={track} index={index} />
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
