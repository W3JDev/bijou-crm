import { ImageResponse } from "next/og";

/**
 * Bijou favicon — Deep Green (#0d3d3d) rounded square with a Gold
 * WhatsApp-style chat icon, matching the brand spec locked in
 * STRATEGY-2026-05-15.md (Deep Green + Gold, no purple).
 *
 * Next.js renders this at build time and auto-injects <link rel="icon">
 * into <head>. Takes precedence over any favicon.ico on disk.
 */

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d3d3d", /* Bijou Deep Green */
          borderRadius: 6,
          border: "1px solid rgba(212,175,55,0.4)",
        }}
      >
        {/* Gold "B" lettermark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 20,
            height: 20,
            color: "#d4af37", /* Bijou Gold */
            fontWeight: 800,
            fontSize: 18,
            fontFamily: "Georgia, serif",
            lineHeight: 1,
          }}
        >
          B
        </div>
      </div>
    ),
    { ...size },
  );
}
