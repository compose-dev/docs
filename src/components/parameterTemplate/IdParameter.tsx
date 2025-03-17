import React from "react";
import Parameter from "../Parameter";

export default function IdParameter({
  description,
}: {
  description?: string | ((lang: "js" | "py") => React.Node);
}) {
  return (
    <Parameter
      name="id"
      required={true}
      type="string"
      description={
        description ||
        "A unique identifier for the component. This is necessary so that Compose can properly pass user actions back to the component."
      }
    />
  );
}
