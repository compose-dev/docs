import React from "react";
import Parameter from "../Parameter";

export default function StyleParameter({
  elementName = "element",
  description,
  descriptionAdditional,
}: {
  elementName?: string | React.Node;
  description?: string | ((lang: "js" | "py") => React.Node);
  descriptionAdditional?: React.Node;
}) {
  return (
    <Parameter
      name="style"
      required={false}
      type="style"
      description={
        description || (
          <>
            <p>
              Directly style the underlying {elementName} using CSS. See the{" "}
              <a href="/guides/styling-your-app#styles">styling guide</a> for
              more details on available style properties.
            </p>
            {descriptionAdditional && descriptionAdditional}
          </>
        )
      }
    />
  );
}
