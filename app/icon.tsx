import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "#1E3A5F",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "4px",
        }}
      >
        {/* Diamond/Sparkle icon */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Diamond shape */}
          <path d="M12 2L2 9l10 13 10-13-10-7z" fill="#D4AF37" stroke="#D4AF37" />
          {/* Sparkle accents */}
          <path d="M12 2v4" stroke="white" strokeWidth="1.5" />
          <path d="M7 9h10" stroke="white" strokeWidth="1" opacity="0.7" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
