import scheduleCsv from "../../../kardi_schedule.csv?raw";

export interface Schedule {
  calendarId: string;
  title: string;
  scheduleDate: string;
  scheduleTime: string;
  tag: string;
  imageUrl: string;
  content: string;
  registeredAt: string;
}

const monthNames = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

const tagLabels: Record<string, string> = {
  "001": "PERFORMANCE",
  "002": "RELEASE",
  "003": "NOTICE",
  "004": "LIVE",
};

function parseCsv(csv: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let insideQuotes = false;

  for (let index = 0; index < csv.length; index += 1) {
    const character = csv[index];

    if (insideQuotes) {
      if (character === '"' && csv[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        insideQuotes = false;
      } else {
        field += character;
      }
      continue;
    }

    if (character === '"') {
      insideQuotes = true;
    } else if (character === ",") {
      row.push(field);
      field = "";
    } else if (character === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (character !== "\r") {
      field += character;
    }
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

function normalizeTime(time: string) {
  return time.trim().slice(0, 4).padEnd(4, "0");
}

function compareSchedules(first: Schedule, second: Schedule) {
  const dateComparison = first.scheduleDate.localeCompare(second.scheduleDate);
  if (dateComparison !== 0) return dateComparison;

  if (!first.scheduleTime && second.scheduleTime) return -1;
  if (first.scheduleTime && !second.scheduleTime) return 1;

  return normalizeTime(first.scheduleTime).localeCompare(normalizeTime(second.scheduleTime));
}

function getTodayInKorea() {
  const dateParts = new Intl.DateTimeFormat("en", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const date = Object.fromEntries(dateParts.map(({ type, value }) => [type, value]));

  return `${date.year}${date.month}${date.day}`;
}

function getSchedulesFromCsv() {
  const [header, ...rows] = parseCsv(scheduleCsv);
  const columnIndex = Object.fromEntries(header.map((column, index) => [column, index]));

  return rows
    .map<Schedule>((row) => ({
      calendarId: row[columnIndex.calendar_id] ?? "",
      title: row[columnIndex.title] ?? "",
      scheduleDate: row[columnIndex.schedule_dt] ?? "",
      scheduleTime: row[columnIndex.schedule_time] ?? "",
      tag: row[columnIndex.tag] ?? "",
      imageUrl: row[columnIndex.img_url] ?? "",
      content: row[columnIndex.content] ?? "",
      registeredAt: row[columnIndex.rgst_dt] ?? "",
    }))
    .filter(({ calendarId, scheduleDate }) => calendarId && scheduleDate)
    .sort(compareSchedules);
}

export function formatScheduleDate(date: string) {
  const year = date.slice(0, 4);
  const month = monthNames[Number(date.slice(4, 6)) - 1] ?? "";
  const day = Number(date.slice(6, 8));
  return `${month} ${day}, ${year}`;
}

export function formatScheduleTime(time: string) {
  if (!time.trim()) return "";
  const normalizedTime = normalizeTime(time);
  return `${normalizedTime.slice(0, 2)}:${normalizedTime.slice(2, 4)}`;
}

export function getTagLabel(tag: string) {
  return tagLabels[tag] ?? "EVENT";
}

export const allSchedules = getSchedulesFromCsv();

export function getFeaturedSchedules(limit = 5) {
  const today = getTodayInKorea();
  const upcomingSchedules = allSchedules.filter(({ scheduleDate }) => scheduleDate >= today);
  return (upcomingSchedules.length ? upcomingSchedules : allSchedules).slice(0, limit);
}
