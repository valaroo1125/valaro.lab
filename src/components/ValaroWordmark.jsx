import React from "react";

export default function ValaroWordmark() {
  const letters = ["V", "A", "L", "A", "R", "O"];

  return (
    <div
      className="flex flex-col items-center justify-center select-none"
      style={{
        background: "linear-gradient(180deg, #b83a52 0%, #8e2436 50%, #2e3b57 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {letters.map((l, i) => (
        <span
          key={i}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 0.9,
          }}
        >
          {l}
        </span>
      ))}
    </div>
  );
}
