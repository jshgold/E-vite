"use client";

import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

type GuestMessage = {
  id: number;
  name: string;
  message: string;
  date: string;
};

// Supabase 연동 전 로컬 샘플 데이터
const sampleMessages: GuestMessage[] = [
  {
    id: 1,
    name: "이민준",
    message: "두 분의 결혼을 진심으로 축하드립니다. 항상 행복하세요!",
    date: "2025.10.01",
  },
  {
    id: 2,
    name: "박서연",
    message: "오래오래 행복하게 사세요 ♥",
    date: "2025.10.05",
  },
];

export default function Guestbook() {
  const ref = useFadeIn();
  const [messages, setMessages] = useState<GuestMessage[]>(sampleMessages);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    // TODO: Supabase 연동 시 여기서 API 호출
    const newMsg: GuestMessage = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).replace(/\. /g, ".").replace(".", "").slice(0, -1),
    };

    setMessages([newMsg, ...messages]);
    setName("");
    setMessage("");
    setPassword("");
    setIsSubmitting(false);
  };

  return (
    <section
      className="section"
      style={{
        background: "var(--bg-card)",
        borderTop: "1px solid var(--divider)",
      }}
    >
      <div ref={ref} className="fade-in">
        <p className="section-title">GUESTBOOK</p>

        {/* 입력 폼 */}
        <form onSubmit={handleSubmit} style={{ marginBottom: "48px" }}>
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={10}
              style={inputStyle("30%")}
            />
            <input
              type="password"
              placeholder="비밀번호 (삭제용)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength={20}
              style={inputStyle("70%")}
            />
          </div>
          <textarea
            placeholder="축하 메시지를 남겨주세요."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={200}
            rows={3}
            style={{
              ...inputStyle("100%"),
              resize: "none",
              height: "80px",
              marginBottom: "10px",
            }}
          />
          <button
            type="submit"
            disabled={isSubmitting || !name.trim() || !message.trim()}
            style={{
              width: "100%",
              padding: "14px",
              background:
                isSubmitting || !name.trim() || !message.trim()
                  ? "var(--divider)"
                  : "var(--text-primary)",
              color:
                isSubmitting || !name.trim() || !message.trim()
                  ? "var(--text-light)"
                  : "var(--bg)",
              border: "none",
              borderRadius: "2px",
              fontSize: "12px",
              letterSpacing: "0.2em",
              cursor:
                isSubmitting || !name.trim() || !message.trim()
                  ? "not-allowed"
                  : "pointer",
              transition: "all 0.2s",
              fontWeight: 400,
            }}
          >
            {isSubmitting ? "..." : "메시지 남기기"}
          </button>
        </form>

        {/* 메시지 목록 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {messages.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                fontSize: "13px",
                color: "var(--text-light)",
                padding: "32px 0",
                fontWeight: 300,
              }}
            >
              첫 번째 축하 메시지를 남겨주세요.
            </p>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  padding: "20px",
                  background: "var(--bg)",
                  borderRadius: "2px",
                  border: "1px solid var(--divider)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {msg.name}
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      color: "var(--text-light)",
                      fontWeight: 300,
                    }}
                  >
                    {msg.date}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    fontWeight: 300,
                    lineHeight: "1.8",
                  }}
                >
                  {msg.message}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function inputStyle(width: string): React.CSSProperties {
  return {
    width,
    padding: "12px 14px",
    border: "1px solid var(--border)",
    borderRadius: "2px",
    background: "var(--bg)",
    fontSize: "13px",
    color: "var(--text-primary)",
    fontFamily: "Noto Sans KR, sans-serif",
    fontWeight: 300,
    outline: "none",
    boxSizing: "border-box",
  };
}
