import React from "react";
import Parameter from "../Parameter";

export default function ChildrenParameter({
  description,
  componentName,
}: {
  componentName: string;
  description?: string | ((lang: "js" | "py") => React.Node);
}) {
  return (
    <Parameter
      name="children"
      required={true}
      type={(lang) =>
        lang === "js"
          ? "Component | Component[]"
          : "Component | list[Component]"
      }
      description={
        description ||
        `The child component(s) to be arranged within the ${componentName || "component"}. This can be a single component or a list of components.`
      }
    />
  );
}
