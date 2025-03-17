import React from "react";
import Parameter from "../Parameter";

export default function ValidateInputParameter({
  hookInputArgument,
  componentName,
  description,
}: {
  description?: React.Node | ((lang: "js" | "py") => React.Node);
  componentName: string;
  hookInputArgument: (lang: "js" | "py") => string;
}) {
  return (
    <Parameter
      name={"validate"}
      required={false}
      type={(lang) =>
        lang === "js"
          ? `(${hookInputArgument(lang)}) => string | void`
          : `Callable[[${hookInputArgument(lang)}], str | None]`
      }
      description={
        description ||
        `Validate the ${componentName} value before submitting it. If the function returns a string, it will be displayed as an error message.`
      }
    />
  );
}
