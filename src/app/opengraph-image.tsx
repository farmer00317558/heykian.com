import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top left, #183768 0%, #0a1330 42%, #050816 100%)",
          color: "#f8fbff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(88, 160, 255, 0.28), rgba(114, 235, 214, 0.08) 45%, rgba(255, 255, 255, 0) 72%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -90,
            width: 420,
            height: 420,
            borderRadius: "9999px",
            background: "rgba(112, 240, 214, 0.16)",
            filter: "blur(10px)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "56px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              opacity: 0.88,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 58,
                height: 58,
                borderRadius: 18,
                background:
                  "linear-gradient(135deg, rgba(117,162,255,0.95), rgba(142,243,213,0.8))",
                alignItems: "center",
                justifyContent: "center",
                color: "#07101f",
                fontSize: 28,
                fontWeight: 800,
              }}
            >
              K
            </div>
            {` `}
            {`Kian`}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 880,
              gap: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 84,
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: -3,
              }}
            >
              Your First Agent Team
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 30,
                lineHeight: 1.4,
                color: "rgba(248,251,255,0.82)",
                maxWidth: 820,
              }}
            >
              Multi-agent collaboration, local execution, scheduled jobs, long-running tasks,
              and multi-channel communication.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            {["Runs locally", "Scheduled tasks", "Long-running tasks", "SKILL / MCP"].map(
              (label) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    padding: "12px 18px",
                    borderRadius: 999,
                    background: "rgba(248, 251, 255, 0.08)",
                    border: "1px solid rgba(248, 251, 255, 0.12)",
                    fontSize: 22,
                    color: "rgba(248,251,255,0.92)",
                  }}
                >
                  {label}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
