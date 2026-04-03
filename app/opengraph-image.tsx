import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Yatra Holiday | Nepal's Premier Travel Agency";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "#bb0011",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          textAlign: "center",
        }}
      >
        {/* Placeholder for Logo - In a real env, you'd fetch the actual logo buffer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
            background: "white",
            padding: "20px 40px",
          }}
        >
          <span style={{ fontSize: 60, fontWeight: "bold", color: "#bb0011" }}>
            YATRA HOLIDAY
          </span>
        </div>
        
        <div
          style={{
            fontSize: 60,
            fontWeight: "bold",
            color: "white",
            lineHeight: 1.2,
            marginBottom: "20px",
            maxWidth: "900px",
          }}
        >
          Yatra Holiday | Nepal's Premier Travel Agency
        </div>
        
        <div
          style={{
            fontSize: 32,
            color: "rgba(255, 255, 255, 0.8)",
            fontWeight: "normal",
          }}
        >
          Thamel, Kathmandu, Nepal
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
