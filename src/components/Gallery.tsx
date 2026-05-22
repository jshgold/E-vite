"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn";
import { wedding } from "@/config/wedding";

const { gallery } = wedding;

// 플레이스홀더 색상 (실제 사진 업로드 전까지 표시)
const placeholderColors = [
  "#E8DFD3",
  "#DDD5C8",
  "#E3D8CD",
  "#D8D0C4",
  "#E0D9D0",
  "#DDD6CB",
];

export default function Gallery() {
  const fadeRef = useFadeIn();
  const [selected, setSelected] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="section"
      style={{
        background: "var(--bg-card)",
        borderTop: "1px solid var(--divider)",
        borderBottom: "1px solid var(--divider)",
        padding: "80px 0",
      }}
    >
      <div ref={fadeRef} className="fade-in">
        <p className="section-title" style={{ paddingLeft: "24px" }}>
          GALLERY
        </p>

        {/* 가로 스크롤 갤러리 */}
        <div
          ref={scrollRef}
          className="gallery-scroll"
          style={{
            display: "flex",
            gap: "8px",
            padding: "0 24px",
          }}
        >
          {gallery.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              style={{
                flexShrink: 0,
                width: "200px",
                height: "266px",
                borderRadius: "2px",
                overflow: "hidden",
                background: placeholderColors[idx % placeholderColors.length],
                border: "none",
                cursor: "pointer",
                position: "relative",
                display: "block",
              }}
            >
              <Image
                src={src}
                alt={`웨딩 사진 ${idx + 1}`}
                fill
                sizes="200px"
                style={{ objectFit: "cover" }}
                onError={(e) => {
                  // 이미지 로드 실패 시 placeholder 유지
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </button>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            color: "var(--text-light)",
            marginTop: "16px",
            letterSpacing: "0.1em",
            fontWeight: 300,
          }}
        >
          ← 스와이프 →
        </p>
      </div>

      {/* 전체화면 모달 */}
      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "480px",
              aspectRatio: "3/4",
              background: placeholderColors[selected % placeholderColors.length],
              borderRadius: "2px",
            }}
          >
            <Image
              src={gallery[selected]}
              alt={`웨딩 사진 ${selected + 1}`}
              fill
              sizes="100vw"
              quality={100}
              style={{ objectFit: "contain", borderRadius: "2px" }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>

          {/* 좌우 화살표 */}
          {selected > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setSelected(selected - 1); }}
              style={arrowBtnStyle("left")}
            >
              ‹
            </button>
          )}
          {selected < gallery.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setSelected(selected + 1); }}
              style={arrowBtnStyle("right")}
            >
              ›
            </button>
          )}

          {/* 닫기 */}
          <button
            onClick={() => setSelected(null)}
            style={{
              position: "fixed",
              top: "20px",
              right: "20px",
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "28px",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ×
          </button>

          {/* 인덱스 */}
          <p
            style={{
              position: "fixed",
              bottom: "24px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "rgba(255,255,255,0.5)",
              fontSize: "12px",
              letterSpacing: "0.2em",
            }}
          >
            {selected + 1} / {gallery.length}
          </p>
        </div>
      )}
    </section>
  );
}

function arrowBtnStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "fixed",
    top: "50%",
    [side]: "16px",
    transform: "translateY(-50%)",
    background: "transparent",
    border: "none",
    color: "rgba(255,255,255,0.7)",
    fontSize: "48px",
    cursor: "pointer",
    lineHeight: 1,
    padding: "8px",
  };
}
