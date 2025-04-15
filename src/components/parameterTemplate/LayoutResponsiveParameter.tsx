import React from "react";
import Parameter from "../Parameter";

export default function LayoutResponsiveParameter({
  description,
}: {
  description?: string | ((lang: "js" | "py") => React.Node);
}) {
  return (
    <Parameter
      name="responsive"
      required={false}
      type="boolean"
      version="0.26.8"
      description={(lang) =>
        description || (
          <>
            <p>
              Whether the container should automatically adjust to a vertical
              layout on mobile devices. Defaults to{" "}
              <code>{lang === "js" ? "true" : "True"}</code>.
            </p>
          </>
        )
      }
    />
  );
}
