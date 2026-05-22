"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/config/wedding";

const { groom, bride, date } = wedding;

const weddingDate = new Date(
  date.year,
  date.month - 1,
  date.day,
  date.hour,
  date.minute
);

function formatDate() {
  return `${date.year}. ${String(date.month).padStart(2, "0")}. ${String(date.day).padStart(2, "0")}`;
}

export default function Hero() {
  const [dday, setDday] = useState<number | null>(null);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(date.year, date.month - 1, date.day);
    const diff = Math.ceil(
      (target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
    setDday(diff);
  }, []);

  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px",
        textAlign: "center",
        background: "var(--bg)",
        position: "relative",
      }}
    >
      {/* 상단 장식 */}
      <div style={{ marginBottom: "48px", opacity: 0.4 }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 4 C16 4, 8 10, 8 18 C8 22.4 11.6 26 16 26 C20.4 26 24 22.4 24 18 C24 10 16 4 16 4Z"
            fill="var(--accent)"
            opacity="0.6"
          />
          <path
            d="M16 8 C16 8, 10 13, 10 18 C10 21.3 12.7 24 16 24 C19.3 24 22 21.3 22 18 C22 13 16 8 16 8Z"
            fill="var(--bg)"
          />
        </svg>
      </div>

      {/* 이름 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "32px",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "Noto Sans KR, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: "var(--text-light)",
              marginBottom: "6px",
              fontWeight: 400,
            }}
          >
            {groom.role}
          </p>
          <p
            className="font-serif"
            style={{
              fontSize: "28px",
              fontWeight: 400,
              color: "var(--text-primary)",
              letterSpacing: "0.1em",
            }}
          >
            {groom.name}
          </p>
        </div>

        <div
          style={{
            width: "1px",
            height: "48px",
            background: "var(--border)",
            flexShrink: 0,
          }}
        />

        <div>
          <p
            style={{
              fontFamily: "Noto Sans KR, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.25em",
              color: "var(--text-light)",
              marginBottom: "6px",
              fontWeight: 400,
            }}
          >
            {bride.role}
          </p>
          <p
            className="font-serif"
            style={{
              fontSize: "28px",
              fontWeight: 400,
              color: "var(--text-primary)",
              letterSpacing: "0.1em",
            }}
          >
            {bride.name}
          </p>
        </div>
      </div>

      {/* 구분선 */}
      <div className="divider-h" style={{ marginBottom: "32px" }} />

      {/* 날짜 */}
      <p
        className="font-serif"
        style={{
          fontSize: "14px",
          letterSpacing: "0.2em",
          color: "var(--text-secondary)",
          marginBottom: "8px",
          fontWeight: 400,
        }}
      >
        {formatDate()}
      </p>
      <p
        style={{
          fontSize: "13px",
          letterSpacing: "0.15em",
          color: "var(--text-light)",
          marginBottom: "40px",
          fontWeight: 300,
        }}
      >
        {date.dayOfWeek} {date.hour}시 {date.minute > 0 ? `${date.minute}분` : ""}
      </p>

      {/* D-day */}
      {dday !== null && (
        <div
          style={{
            display: "inline-block",
            padding: "8px 20px",
            border: "1px solid var(--border)",
            borderRadius: "2px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "0.2em",
              color: "var(--accent)",
              fontWeight: 400,
            }}
          >
            {dday > 0 ? `D - ${dday}` : dday === 0 ? "D - DAY" : `D + ${Math.abs(dday)}`}
          </p>
        </div>
      )}

      {/* 스크롤 안내 */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "fadeInDown 2s ease infinite",
        }}
      >
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.3em",
            color: "var(--text-light)",
            fontWeight: 300,
          }}
        >
          SCROLL
        </p>
        <div
          style={{
            width: "1px",
            height: "24px",
            background: "var(--border)",
          }}
        />
      </div>

      <style>{`
        @keyframes fadeInDown {
          0%, 100% { opacity: 0.3; transform: translateX(-50%) translateY(0); }
          50% { opacity: 1; transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
