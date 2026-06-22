import { discographyPageItems } from "@/app/components/discographyPageData";
import { Link } from "react-router";
import discographyBackground from "../../../live_event_bg.png";
import "./DiscographyPage.css";

function trackLabel(trackCount: number) {
  return `${trackCount} ${trackCount === 1 ? "TRACK" : "TRACKS"}`;
}

export function DiscographyPage() {
  return (
    <main
      className="discography-index-page"
      data-gnb-theme="dark"
    >
      <div
        className="discography-index-viewport-background"
        style={{ backgroundImage: `url(${discographyBackground})` }}
        aria-hidden="true"
      />

      <section className="discography-index-list" aria-labelledby="discography-index-title">
        <h1 id="discography-index-title" className="sr-only">
          Discography
        </h1>

        {discographyPageItems.map((album) => (
          <Link
            key={album.id}
            to={`/discography/${album.id}`}
            className="discography-index-card"
            aria-label={`View ${album.title} album details`}
          >
            <div className="discography-index-cover">
              <img src={album.cover} alt={`${album.title} album cover`} loading="lazy" decoding="async" />
            </div>

            <div className="discography-index-copy">
              <p className="discography-index-meta">
                <time dateTime={album.releaseDate.replaceAll(".", "-")}>{album.releaseDate}</time>
                <span aria-hidden="true"> / </span>
                <span>{album.type}</span>
                <span aria-hidden="true"> / </span>
                <span>{trackLabel(album.trackCount)}</span>
              </p>
              <h2 className="discography-index-name">{album.title}</h2>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
