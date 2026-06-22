import { archiveCollections } from "@/app/components/archiveData";
import { Link } from "react-router";
import archiveBackground from "../../../live_event_bg.png";
import "./ArchivePage.css";

export function ArchivePage() {
  return (
    <main
      className="archive-index-page"
      data-gnb-theme="dark"
    >
      <div
        className="archive-index-viewport-background"
        style={{ backgroundImage: `url(${archiveBackground})` }}
        aria-hidden="true"
      />

      <section className="archive-index-list" aria-labelledby="archive-index-title">
        <h1 id="archive-index-title" className="sr-only">
          Archive
        </h1>

        {archiveCollections.map((collection) => (
          <Link
            key={collection.id}
            to={`/archive/${collection.id}`}
            className="archive-index-card"
            data-archive-group={collection.cover.groupId}
            data-archive-image-count={collection.images.length}
            aria-label={`View ${collection.title} archive`}
          >
            <div className="archive-index-cover">
              <img src={collection.cover.src} alt={collection.title} loading="lazy" decoding="async" />
            </div>

            <div className="archive-index-copy">
              <time dateTime={collection.date.replaceAll(".", "-")} className="archive-index-date">
                {collection.date}
              </time>
              <h2 className="archive-index-name">{collection.title}</h2>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
