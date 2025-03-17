import React from "react";
import Parameter from "../Parameter";

export default function OnChangeParameter({
  hookInputArgument,
  componentName,
  description,
}: {
  hookInputArgument: (lang: "js" | "py") => string;
  componentName: string;
  description?: React.ReactNode | ((lang: "js" | "py") => React.ReactNode);
}) {
  return (
    <Parameter
      name={(lang) => (lang === "js" ? "properties.onChange" : "on_change")}
      required={false}
      type={(lang) =>
        lang === "js"
          ? `(${hookInputArgument(lang)}) => void`
          : `Callable[[${hookInputArgument(lang)}], None]`
      }
      description={
        description ||
        `A callback function that is called when the user changes the value of the ${componentName}.`
      }
    />
  );
}
