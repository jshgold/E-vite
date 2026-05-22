"use client";

import { useFadeIn } from "@/hooks/useFadeIn";
import { wedding } from "@/config/wedding";

const { date, venue } = wedding;

export default function EventInfo() {
  const ref = useFadeIn();

  return (
    <section
      className="section"
      style={{ background: "var(--bg-card)", borderTop: "1px solid var(--divider)", borderBottom: "1px solid var(--divider)" }}
    >
      <div ref={ref} className="fade-in" style={{ textAlign: "center" }}>
        <p className="section-title">DETAILS</p>

        {/* 날짜 */}
        <div style={{ marginBottom: "40px" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: "var(--accent)",
              marginBottom: "12px",
              fontWeight: 400,
            }}
          >
            DATE
          </p>
          <p
            className="font-serif"
            style={{
              fontSize: "22px",
              fontWeight: 400,
              color: "var(--text-primary)",
              letterSpacing: "0.08em",
              marginBottom: "6px",
            }}
          >
            {date.year}. {String(date.month).padStart(2, "0")}. {String(date.day).padStart(2, "0")}
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "var(--text-secondary)",
              letterSpacing: "0.1em",
              fontWeight: 300,
            }}
          >
            {date.dayOfWeek} {date.hour}시{date.minute > 0 ? ` ${date.minute}분` : ""}
          </p>
        </div>

        <div className="divider-h" style={{ marginBottom: "40px" }} />

        {/* 장소 */}
        <div>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: "var(--accent)",
              marginBottom: "12px",
              fontWeight: 400,
            }}
          >
            VENUE
          </p>
          <p
            className="font-serif"
            style={{
              fontSize: "20px",
              fontWeight: 400,
              color: "var(--text-primary)",
              letterSpacing: "0.05em",
              marginBottom: "6px",
            }}
          >
            {venue.name}
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "var(--text-secondary)",
              marginBottom: "4px",
              fontWeight: 300,
            }}
          >
            {venue.hall}
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "var(--text-light)",
              fontWeight: 300,
              lineHeight: "1.8",
            }}
          >
            {venue.address}
            <br />
            {venue.addressDetail}
          </p>
          {venue.tel && (
            <a
              href={`tel:${venue.tel}`}
              style={{
                display: "inline-block",
                marginTop: "12px",
                fontSize: "12px",
                color: "var(--accent)",
                letterSpacing: "0.08em",
                fontWeight: 400,
                textDecoration: "none",
                borderBottom: "1px solid var(--accent-light)",
                paddingBottom: "2px",
              }}
            >
              {venue.tel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
