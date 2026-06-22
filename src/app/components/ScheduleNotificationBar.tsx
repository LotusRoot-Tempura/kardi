import "./ScheduleNotificationBar.css";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.6 12.23c0-.71-.06-1.23-.2-1.78H12v3.41h5.52a4.75 4.75 0 0 1-2.05 3.03l-.02.12 2.98 2.31.2.02c1.84-1.7 2.97-4.2 2.97-7.11ZM12 22c2.68 0 4.93-.88 6.58-2.4l-3.16-2.45c-.85.58-1.98.98-3.42.98a5.93 5.93 0 0 1-5.62-4.1l-.12.01-3.1 2.4-.04.11A9.94 9.94 0 0 0 12 22ZM6.38 14.03A6.1 6.1 0 0 1 6.05 12c0-.7.12-1.38.32-2.02v-.13L3.23 7.4l-.1.05A10 10 0 0 0 2 12c0 1.64.4 3.2 1.12 4.55l3.26-2.52ZM12 5.87c1.86 0 3.12.8 3.83 1.47l2.81-2.74C16.92 3 14.68 2 12 2a9.94 9.94 0 0 0-8.88 5.45l3.25 2.53A5.95 5.95 0 0 1 12 5.87Z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.05 12.54c.02-2.03 1.66-3.01 1.74-3.06a3.72 3.72 0 0 0-2.93-1.58c-1.23-.13-2.43.74-3.06.74-.64 0-1.62-.72-2.67-.7a3.9 3.9 0 0 0-3.3 2.01c-1.42 2.46-.36 6.08 1 8.07.68.97 1.47 2.05 2.52 2.01 1.03-.04 1.41-.65 2.65-.65 1.22 0 1.58.65 2.65.63 1.1-.02 1.8-.97 2.45-1.95a8.05 8.05 0 0 0 1.12-2.29 3.5 3.5 0 0 1-2.17-3.23ZM15.06 6.6a3.57 3.57 0 0 0 .82-2.56 3.64 3.64 0 0 0-2.36 1.22 3.4 3.4 0 0 0-.85 2.46 3 3 0 0 0 2.39-1.12Z"
      />
    </svg>
  );
}

export function ScheduleNotificationBar() {
  return (
    <aside className="schedule-notification-bar" aria-label="GOODDUCK schedule notifications">
      <div className="schedule-notification-copy">
        <p>KARDI의 소식을 놓치지 마세요</p>
        <p>GOODDUCK에서 스케줄 알림을 받고, 새로운 일정을 가장 빠르게 확인해 보세요.</p>
      </div>

      <div className="schedule-notification-actions" aria-label="Sign-in options currently unavailable">
        <button type="button" disabled>
          <GoogleIcon />
          <span>Google로 계속하기</span>
        </button>
        <button type="button" disabled>
          <AppleIcon />
          <span>Apple로 계속하기</span>
        </button>
      </div>
    </aside>
  );
}
