import React from "react";
import Parameter from "../Parameter";

export default function InitialValueParameter({
  description,
  type,
  componentName,
}: {
  componentName: string;
  type: (lang: "js" | "py") => React.Node;
  description?: string | ((lang: "js" | "py") => React.Node);
}) {
  return (
    <Parameter
      name={(lang) =>
        lang === "js" ? "properties.initialValue" : "initial_value"
      }
      required={false}
      type={type}
      description={(lang) =>
        typeof description === "function"
          ? description(lang)
          : description || (
              <p>
                The initial value of the {componentName}. Defaults to{" "}
                <code>{lang === "js" ? "null" : "None"}</code>. You can also
                update the value of the {componentName} at any time using the{" "}
                <a href="/page-actions/set-inputs">
                  <code>
                    {lang === "js" ? "page.setInputs()" : "page.set_inputs()"}
                  </code>
                </a>{" "}
                method.
              </p>
            )
      }
    />
  );
}
