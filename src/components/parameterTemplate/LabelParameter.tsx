import React from "react";
import Parameter from "../Parameter";

export default function LabelParameter({
  description,
  componentName,
  direction = "above",
  infer = true,
}: {
  componentName: string;
  direction?: "above" | "beside" | "inside";
  infer?: boolean;
  description?: string | ((lang: "js" | "py") => React.Node);
}) {
  return (
    <Parameter
      name="label"
      required={false}
      type="string"
      description={
        description || (
          <p>
            The label to display {direction} the {componentName}. If not
            provided, the label will be{" "}
            {infer ? (
              <>
                inferred from the <code>id</code>
              </>
            ) : (
              "left blank."
            )}
            .
          </p>
        )
      }
    />
  );
}
