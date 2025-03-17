import { useEffect, useState } from "react";

const LOCAL_URL =
  "http://localhost:5173/app/3eb3d4f4-9fe8-46b1-8a86-26c1f32733fc/documentation";
const PROD_URL =
  "https://app.composehq.com/app/76c437ce-2db1-4146-8712-d4417cb8e570/documentation";

function AppFrame({ type, heightPx }: { type: string; heightPx: number }) {
  const [isDarkTheme, setIsDarkTheme] = useState(null);
  const [loadFrame, setLoadFrame] = useState(false);

  const isDev =
    typeof window !== "undefined" && window.location.hostname === "localhost";

  const initialUrl = new URL(isDev ? LOCAL_URL : PROD_URL);
  initialUrl.searchParams.set("type", type);

  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          const htmlElement = document.documentElement;
          const isCurrentlyDark =
            htmlElement.getAttribute("data-theme") === "dark";
          setIsDarkTheme(isCurrentlyDark);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Initial check
    setIsDarkTheme(
      document.documentElement.getAttribute("data-theme") === "dark"
    );

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      const newUrl = new URL(url);
      newUrl.searchParams.set("isDark", "TRUE");
      newUrl.searchParams.delete("isLight");
      setUrl(newUrl);
      setLoadFrame(true);
    } else if (isDarkTheme === false) {
      const newUrl = new URL(url);
      newUrl.searchParams.delete("isDark");
      newUrl.searchParams.set("isLight", "TRUE");
      setUrl(newUrl);
      setLoadFrame(true);
    }
  }, [isDarkTheme]);

  return (
    <div
      style={{
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
        transformStyle: "preserve-3d",
        backgroundColor:
          isDarkTheme === null
            ? "transparent"
            : isDarkTheme
              ? "#242526"
              : "#fcfcfd",
        border:
          isDarkTheme === null
            ? "none"
            : isDarkTheme
              ? "1px dashed #47494b"
              : "1px dashed #d1d5db",
        borderRadius: "4px",
        height: `${heightPx}px`,
        marginBottom: "2rem",
        marginTop: "2rem",
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "var(--ifm-color-emphasis-100)",
          padding: "0.5rem",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            left: "0.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            <div
              style={{
                width: "0.75rem",
                height: "0.75rem",
                borderRadius: "9999px",
                backgroundColor: "var(--ifm-color-emphasis-300)",
              }}
            />
            <div
              style={{
                width: "0.75rem",
                height: "0.75rem",
                borderRadius: "9999px",
                backgroundColor: "var(--ifm-color-emphasis-300)",
              }}
            />
            <div
              style={{
                width: "0.75rem",
                height: "0.75rem",
                borderRadius: "9999px",
                backgroundColor: "var(--ifm-color-emphasis-300)",
              }}
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "var(--ifm-color-emphasis-0)",
            color: "var(--ifm-color-emphasis-700)",
            fontSize: "0.75rem",
            padding: "0.25rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            borderRadius: "0.75rem",
          }}
        >
          <p style={{ margin: 0 }}>composehq.com</p>
        </div>
        <div
          style={{
            position: "absolute",
            height: "100%",
            right: "0.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.125rem",
            }}
          >
            <p
              style={{
                fontSize: "10px",
                lineHeight: "0.75rem",
                letterSpacing: "0.05em",
                color: "var(--ifm-color-emphasis-600)",
                margin: 0,
              }}
            >
              LIVE DEMO
            </p>
          </div>
        </div>
      </div>
      <div style={{ overflowY: "auto", scrollbarWidth: "thin" }}>
        {loadFrame && (
          <iframe
            src={url.toString()}
            width="100%"
            style={{
              borderRadius: "8px",
              height: `${heightPx - 46}px`,
              backgroundColor: "var(--ifm-color-emphasis-100)",
            }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default AppFrame;
