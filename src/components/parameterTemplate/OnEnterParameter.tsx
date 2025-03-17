import React from "react";
import Parameter from "../Parameter";

export default function OnEnterParameter({
  hookInputArgument,
  componentName,
}: {
  hookInputArgument: (lang: "js" | "py") => string;
  componentName: string;
}) {
  return (
    <Parameter
      name={(lang) => (lang === "js" ? "properties.onEnter" : "on_enter")}
      required={false}
      type={(lang) =>
        lang === "js"
          ? `(${hookInputArgument(lang)}) => void`
          : `Callable[[${hookInputArgument(lang)}], None]`
      }
      description={`A callback function that is called when the user presses enter in the ${componentName}.`}
    />
  );
}
