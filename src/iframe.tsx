import { useEffect, useState } from "react";

const LOCAL_URL = "http://localhost:5173/docs";
const PROD_URL = "https://app.composehq.com/docs";

function IFrame({ type, heightPx }: { type: string; heightPx: number }) {
  const [isDarkTheme, setIsDarkTheme] = useState(null);

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
      setUrl(newUrl);
    } else {
      const newUrl = new URL(url);
      newUrl.searchParams.delete("isDark");
      setUrl(newUrl);
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
      <iframe
        src={url.toString()}
        width="100%"
        style={{
          borderRadius: "4px",
          height: `${heightPx - 2}px`,
        }}
      ></iframe>
    </div>
  );
}

export default IFrame;
