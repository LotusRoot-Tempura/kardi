import { useEffect, useState } from "react";
import profileBackground from "../../../live_event_bg.png";
import profileMain from "../../../member_profile/profile_main.png";
import member1Extended from "../../../member_profile/profile_mem1_extend.png";
import member2Extended from "../../../member_profile/profile_mem2_extend.png";
import member3Extended from "../../../member_profile/profile_mem3_extend.png";
import member4Extended from "../../../member_profile/profile_mem4_extend.png";
import "./Profile.css";

type SocialLink = {
  label: string;
  href: string;
};

type Member = {
  id: string;
  name: string;
  birthDate: string;
  role: string;
  extended: string;
  socials: SocialLink[];
};

const members: Member[] = [
  {
    id: "kim-yeji",
    name: "Kim Yeji",
    birthDate: "1996.09.23",
    role: "Vocal",
    extended: member1Extended,
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/y__easy/" },
      { label: "X", href: "https://x.com/yejipnida" },
      { label: "Facebook", href: "https://www.facebook.com/kimyejimusic" },
    ],
  },
  {
    id: "hwang-leen",
    name: "Hwang Leen",
    birthDate: "1996.12.02",
    role: "Guitar",
    extended: member2Extended,
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/lnnyhwng/" },
      { label: "X", href: "https://x.com/makilove_leeney" },
      { label: "YouTube", href: "https://www.youtube.com/c/LeeneyHwang" },
      { label: "Sound Cloud", href: "https://soundcloud.com/leeneyhwang" },
    ],
  },
  {
    id: "park-dawool",
    name: "Park Dawool",
    birthDate: "1992.10.04",
    role: "Geomungo",
    extended: member3Extended,
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/wool_music/" },
      { label: "YouTube", href: "https://www.youtube.com/channel/UC1-TOnCeGjZV5XzcI6nNxBQ" },
    ],
  },
  {
    id: "hwang-inkyu",
    name: "Hwang Inkyu",
    birthDate: "1993.03.02",
    role: "Bass",
    extended: member4Extended,
    socials: [{ label: "Instagram", href: "https://www.instagram.com/hwanginkyu__/" }],
  },
];

function ExternalArrow() {
  return (
    <svg className="profile-social-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19 19 5M9 5h10v10" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function MemberDetails({ member, active }: { member: Member; active: boolean }) {
  return (
    <div className="profile-member-details-shell" aria-hidden={!active}>
      <div className="profile-member-details">
        <div>
          <h3 className="profile-member-name">{member.name}</h3>
          <p className="profile-member-meta">
            {member.birthDate} <span aria-hidden="true">/</span> {member.role}
          </p>
        </div>

        <div className="profile-member-socials" aria-label={`${member.name} social links`}>
          {member.socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="profile-member-social-link"
              tabIndex={active ? undefined : -1}
            >
              <span>{label}</span>
              <ExternalArrow />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Profile() {
  const [activeMemberId, setActiveMemberId] = useState<string | null>(null);
  const hasActiveMember = activeMemberId !== null;

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveMemberId(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <main
      className="profile-page"
      data-gnb-theme="dark"
      style={{ backgroundImage: `url(${profileBackground})` }}
    >
      <section className="profile-hero" aria-label="KARDI profile image">
        <img src={profileMain} alt="KARDI members" />
      </section>

      <section className="profile-introduction" aria-labelledby="profile-title">
        <h1 id="profile-title">KARDI</h1>
        <p>
          김예지, 황린, 박다울, 황인규 네 명의 멤버로 구성된 KARDI는 심장을 뜻하는 'Cardi-'에 한국을 의미하는 'K'를 더해,
          음악으로 사람들의 심장을 뛰게 만들겠다는 의미를 담은 밴드다.
          <br className="profile-description-break" /> 서로 다른 음악적 개성과 에너지가 하나의 울림으로 이어져, KARDI만의 새로운
          사운드를 만들어가고 있다.
        </p>
      </section>

      <section className="profile-members-section" aria-label="KARDI members">
        <div className={`profile-members ${hasActiveMember ? "profile-members--expanded" : ""}`}>
          {members.map((member) => {
            const isActive = member.id === activeMemberId;

            return (
              <article
                key={member.id}
                className={`profile-member-card ${isActive ? "profile-member-card--active" : ""}`}
                data-member={member.id}
              >
                <button
                  type="button"
                  className="profile-member-portrait"
                  aria-label={`${member.name} profile ${isActive ? "close" : "open"}`}
                  aria-expanded={isActive}
                  onClick={() => setActiveMemberId(isActive ? null : member.id)}
                >
                  <img
                    src={member.extended}
                    alt={member.name}
                    className="profile-member-image"
                    loading="lazy"
                    decoding="async"
                  />
                </button>

                <MemberDetails member={member} active={isActive} />
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
