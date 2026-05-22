"use client";

import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { wedding } from "@/config/wedding";

const { groom, bride } = wedding;

export default function AccountInfo() {
  const ref = useFadeIn();
  const [openGroom, setOpenGroom] = useState(false);
  const [openBride, setOpenBride] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section className="section">
      <div ref={ref} className="fade-in" style={{ textAlign: "center" }}>
        <p className="section-title">CONGRATULATIONS</p>

        <p
          className="font-serif"
          style={{
            fontSize: "14px",
            color: "var(--text-secondary)",
            lineHeight: "2",
            fontWeight: 300,
            marginBottom: "40px",
          }}
        >
          축하의 마음을 전하고 싶으신 분들을 위해
          <br />
          계좌번호를 안내드립니다.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <AccountCard
            label={`${groom.role} ${groom.name}`}
            account={groom.account}
            isOpen={openGroom}
            onToggle={() => setOpenGroom(!openGroom)}
            onCopy={() =>
              copyToClipboard(groom.account.number, "groom")
            }
            isCopied={copied === "groom"}
          />
          <AccountCard
            label={`${bride.role} ${bride.name}`}
            account={bride.account}
            isOpen={openBride}
            onToggle={() => setOpenBride(!openBride)}
            onCopy={() =>
              copyToClipboard(bride.account.number, "bride")
            }
            isCopied={copied === "bride"}
          />
        </div>
      </div>
    </section>
  );
}

function AccountCard({
  label,
  account,
  isOpen,
  onToggle,
  onCopy,
  isCopied,
}: {
  label: string;
  account: { bank: string; number: string; holder: string };
  isOpen: boolean;
  onToggle: () => void;
  onCopy: () => void;
  isCopied: boolean;
}) {
  return (
    <div
      style={{
        border: "1px solid var(--border)",
        borderRadius: "2px",
        overflow: "hidden",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          padding: "16px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            color: "var(--text-primary)",
            fontWeight: 400,
            letterSpacing: "0.05em",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontSize: "18px",
            color: "var(--text-light)",
            transform: isOpen ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
            display: "inline-block",
          }}
        >
          ∨
        </span>
      </button>

      {isOpen && (
        <div
          style={{
            padding: "16px 20px",
            background: "var(--bg)",
            borderTop: "1px solid var(--divider)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                color: "var(--text-light)",
                marginBottom: "4px",
                fontWeight: 300,
                letterSpacing: "0.08em",
              }}
            >
              {account.bank} · {account.holder}
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "var(--text-primary)",
                fontWeight: 400,
                letterSpacing: "0.1em",
              }}
            >
              {account.number}
            </p>
          </div>
          <button
            onClick={onCopy}
            style={{
              padding: "8px 16px",
              background: isCopied ? "var(--accent)" : "transparent",
              border: "1px solid",
              borderColor: isCopied ? "var(--accent)" : "var(--border)",
              borderRadius: "2px",
              cursor: "pointer",
              fontSize: "11px",
              color: isCopied ? "white" : "var(--text-secondary)",
              letterSpacing: "0.1em",
              transition: "all 0.2s",
              flexShrink: 0,
              marginLeft: "12px",
            }}
          >
            {isCopied ? "복사됨" : "복사"}
          </button>
        </div>
      )}
    </div>
  );
}
