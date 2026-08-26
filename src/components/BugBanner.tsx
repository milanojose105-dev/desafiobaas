"use client";

import { useState } from "react";

interface Props {
  numero: number;
  titulo: string;
  oQueAcontece: string;
  porQue: string;
  dica: string;
}

export default function BugBanner({
  numero,
  titulo,
  oQueAcontece,
  porQue,
  dica,
}: Props) {
  const [aberto, setAberto] = useState(true);

  if (!aberto) {
    return (
      <button
        onClick={() => setAberto(true)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.5rem 1rem",
          background: "rgba(34,197,94,0.08)",
          border: "1px solid rgba(34,197,94,0.3)",
          borderRadius: "8px",
          color: "#4ade80",
          fontSize: "0.78rem",
          fontFamily: "monospace",
          cursor: "pointer",
          marginBottom: "1.5rem",
        }}
      >
        ✓ BUG #{numero} — {titulo} — Resolvido
      </button>
    );
  }

  return (
    <div
      style={{
        marginBottom: "1.5rem",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(34,197,94,0.35)",
        background: "rgba(34,197,94,0.05)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.75rem 1.25rem",
          background: "rgba(34,197,94,0.12)",
          borderBottom: "1px solid rgba(34,197,94,0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: "1.1rem" }}>✓</span>

          <span
            style={{
              fontFamily: "monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#4ade80",
              fontWeight: 700,
            }}
          >
            BUG #{numero} CORRIGIDO
          </span>

          <span
            style={{
              padding: "0.15rem 0.5rem",
              borderRadius: "4px",
              background: "rgba(34,197,94,0.2)",
              color: "#86efac",
              fontSize: "0.7rem",
              fontWeight: 700,
            }}
          >
            {titulo}
          </span>
        </div>

        <button
          onClick={() => setAberto(false)}
          style={{
            background: "none",
            border: "none",
            color: "rgba(74,222,128,0.6)",
            cursor: "pointer",
            fontSize: "1rem",
            lineHeight: 1,
          }}
        >
          ×
        </button>
      </div>

      {/* Body */}
      <div
        style={{
          padding: "1rem 1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        {/* O que acontecia */}
        <div>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#4ade80",
              marginBottom: "0.3rem",
            }}
          >
            🔴 O que acontecia
          </p>

          <p
            style={{
              fontSize: "0.88rem",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.6,
            }}
          >
            {oQueAcontece}
          </p>
        </div>

        {/* Causa */}
        <div>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#86efac",
              marginBottom: "0.3rem",
            }}
          >
            🔍 Causa identificada
          </p>

          <p
            style={{
              fontSize: "0.88rem",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.6,
            }}
          >
            {porQue}
          </p>
        </div>

        {/* Correção */}
        <div
          style={{
            padding: "0.75rem 0.9rem",
            borderRadius: "8px",
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.2)",
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#4ade80",
              marginBottom: "0.25rem",
            }}
          >
            ✓ Correção aplicada
          </p>

          <p
            style={{
              fontSize: "0.83rem",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.55,
            }}
          >
            {dica}
          </p>
        </div>

        {/* Status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.55rem 0.75rem",
            borderRadius: "8px",
            background: "rgba(34,197,94,0.12)",
            border: "1px solid rgba(34,197,94,0.25)",
          }}
        >
          <span style={{ fontSize: "1rem" }}>🟢</span>

          <span
            style={{
              fontFamily: "monospace",
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "#4ade80",
              textTransform: "uppercase",
            }}
          >
            Problema resolvido e funcionalidade restaurada
          </span>
        </div>
      </div>
    </div>
  );
}