"use client";

import { useFadeIn } from "@/hooks/useFadeIn";
import { wedding } from "@/config/wedding";

const { venue } = wedding;

export default function Location() {
  const ref = useFadeIn();

  return (
    <section className="section">
      <div ref={ref} className="fade-in">
        <p className="section-title">LOCATION</p>

        {/* 지도 미리보기 (클릭하면 카카오맵 앱 열림) */}
        <a
          href={venue.kakaoMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            width: "100%",
            height: "200px",
            background: "var(--accent-light)",
            borderRadius: "2px",
            overflow: "hidden",
            marginBottom: "24px",
            position: "relative",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "32px" }}>📍</span>
            <p
              className="font-serif"
              style={{
                fontSize: "14px",
                color: "var(--text-secondary)",
                fontWeight: 400,
                letterSpacing: "0.05em",
              }}
            >
              {venue.name}
            </p>
            <p
              style={{
                fontSize: "11px",
                color: "var(--text-light)",
                fontWeight: 300,
                letterSpacing: "0.1em",
              }}
            >
              탭하여 지도 열기
            </p>
          </div>
        </a>

        {/* 주소 */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <p
            className="font-serif"
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "var(--text-primary)",
              marginBottom: "6px",
            }}
          >
            {venue.name}
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
          </p>
        </div>

        {/* 지도 앱 버튼 */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <a
            href={venue.kakaoMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={mapBtnStyle("#FEE500", "#3C1E1E")}
          >
            카카오맵
          </a>
          <a
            href={venue.naverMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={mapBtnStyle("#03C75A", "#FFFFFF")}
          >
            네이버맵
          </a>
        </div>

        {/* 오시는 방법 */}
        <div style={{ marginTop: "48px" }}>
          <TransportItem
            icon="🚇"
            title="지하철"
            content="2호선 강남역 3번 출구에서 도보 5분"
          />
          <TransportItem
            icon="🚌"
            title="버스"
            content="강남역 정류장 하차 후 도보 3분"
          />
          <TransportItem
            icon="🚗"
            title="자가용"
            content={`${venue.name} 주차장 이용 가능\n(2시간 무료 주차)`}
          />
        </div>
      </div>
    </section>
  );
}

function mapBtnStyle(bg: string, color: string): React.CSSProperties {
  return {
    display: "inline-block",
    padding: "10px 20px",
    background: bg,
    color,
    fontSize: "12px",
    fontWeight: 500,
    borderRadius: "2px",
    textDecoration: "none",
    letterSpacing: "0.05em",
    transition: "opacity 0.2s",
  };
}

function TransportItem({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        paddingBottom: "20px",
        marginBottom: "20px",
        borderBottom: "1px solid var(--divider)",
        alignItems: "flex-start",
      }}
    >
      <span style={{ fontSize: "18px", flexShrink: 0, marginTop: "2px" }}>{icon}</span>
      <div>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 500,
            color: "var(--text-primary)",
            marginBottom: "4px",
            letterSpacing: "0.05em",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "var(--text-secondary)",
            fontWeight: 300,
            lineHeight: "1.8",
            whiteSpace: "pre-line",
          }}
        >
          {content}
        </p>
      </div>
    </div>
  );
}
