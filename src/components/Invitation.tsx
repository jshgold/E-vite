"use client";

import { useFadeIn } from "@/hooks/useFadeIn";
import { wedding } from "@/config/wedding";

const { groom, bride, invitation } = wedding;

export default function Invitation() {
  const ref = useFadeIn();

  return (
    <section className="section">
      <div ref={ref} className="fade-in" style={{ textAlign: "center" }}>
        <p className="section-title">INVITATION</p>

        {/* 부모님 소개 */}
        <div
          style={{
            marginBottom: "40px",
            fontSize: "13px",
            color: "var(--text-secondary)",
            lineHeight: "2",
            fontWeight: 300,
          }}
        >
          <p>
            {groom.father} · {groom.mother}의 아들{" "}
            <strong
              className="font-serif"
              style={{ color: "var(--text-primary)", fontWeight: 500 }}
            >
              {groom.name}
            </strong>
          </p>
          <p>
            {bride.father} · {bride.mother}의 딸{" "}
            <strong
              className="font-serif"
              style={{ color: "var(--text-primary)", fontWeight: 500 }}
            >
              {bride.name}
            </strong>
          </p>
        </div>

        <div className="divider-h" style={{ marginBottom: "40px" }} />

        {/* 초대 메시지 */}
        <p
          className="font-serif"
          style={{
            fontSize: "14px",
            lineHeight: "2.2",
            color: "var(--text-secondary)",
            fontWeight: 300,
            whiteSpace: "pre-line",
          }}
        >
          {invitation.message}
        </p>
      </div>
    </section>
  );
}
