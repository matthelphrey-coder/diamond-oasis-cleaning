import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Image generation
export default function AppleIcon() {
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
          borderRadius: "24px",
        }}
      >
        {/* Diamond/Sparkle icon - larger for apple touch icon */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Diamond shape */}
          <path d="M12 2L2 9l10 13 10-13-10-7z" fill="#D4AF37" stroke="#D4AF37" />
          {/* Sparkle/shine lines */}
          <path d="M12 2v4" stroke="white" strokeWidth="1.5" />
          <path d="M7 9h10" stroke="white" strokeWidth="1" opacity="0.6" />
          {/* Small sparkles around diamond */}
          <circle cx="5" cy="4" r="1" fill="white" opacity="0.8" />
          <circle cx="19" cy="4" r="1" fill="white" opacity="0.8" />
          <circle cx="12" cy="22" r="0.8" fill="white" opacity="0.6" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
