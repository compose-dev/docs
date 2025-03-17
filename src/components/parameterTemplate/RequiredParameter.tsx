import React from "react";
import Parameter from "../Parameter";

export default function RequiredParameter({
  description,
  componentName,
  hookName,
}: {
  componentName: string;
  hookName: (lang: "js" | "py") => string;
  description?: string | ((lang: "js" | "py") => React.Node);
}) {
  return (
    <Parameter
      name="required"
      required={false}
      type="boolean"
      description={(lang) =>
        typeof description === "function"
          ? description(lang)
          : description || (
              <p>
                Validate that the {componentName} is not empty before submitting
                the form it's part of or calling it's{" "}
                <code>{hookName(lang)}</code> hook. Defaults to{" "}
                <code>{lang === "js" ? "true" : "True"}</code>.
              </p>
            )
      }
    />
  );
}
