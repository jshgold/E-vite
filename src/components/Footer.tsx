import { wedding } from "@/config/wedding";

const { groom, bride, date, venue } = wedding;

export default function Footer() {
  return (
    <footer
      style={{
        padding: "48px 24px",
        textAlign: "center",
        background: "var(--text-primary)",
        color: "var(--bg)",
      }}
    >
      <p
        className="font-serif"
        style={{
          fontSize: "16px",
          fontWeight: 400,
          letterSpacing: "0.2em",
          marginBottom: "12px",
          opacity: 0.9,
        }}
      >
        {groom.name} ♥ {bride.name}
      </p>
      <p
        style={{
          fontSize: "12px",
          opacity: 0.4,
          letterSpacing: "0.1em",
          fontWeight: 300,
          lineHeight: "1.8",
        }}
      >
        {date.year}.{String(date.month).padStart(2, "0")}.{String(date.day).padStart(2, "0")} {date.dayOfWeek}
        <br />
        {venue.name}
      </p>
    </footer>
  );
}
