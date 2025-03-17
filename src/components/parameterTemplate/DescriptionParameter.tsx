import React from "react";
import Parameter from "../Parameter";

export default function DescriptionParameter({
  description,
  componentName,
  position = "between",
}: {
  componentName: string;
  description?: string | ((lang: "js" | "py") => React.Node);
  position?: "between" | "below";
}) {
  return (
    <Parameter
      name="description"
      required={false}
      type="string"
      description={
        description || (
          <p>
            A description to display{" "}
            {position === "between"
              ? `between the label and ${componentName}`
              : `below the ${componentName}`}
            .
          </p>
        )
      }
    />
  );
}
