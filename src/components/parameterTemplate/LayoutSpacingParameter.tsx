import React from "react";
import Parameter from "../Parameter";

export default function LayoutSpacingParameter({
  description,
}: {
  description?: string | ((lang: "js" | "py") => React.Node);
}) {
  return (
    <Parameter
      name="spacing"
      required={false}
      type="string"
      description={
        description || (
          <>
            <p>
              Set the spacing between child components. Defaults to{" "}
              <code>"16px"</code>.
            </p>
            <p>
              Options include a variety of preset values like <code>"0px"</code>
              , <code>"2px"</code>, <code>"4px"</code>, ...,{" "}
              <code>"160px"</code>, or any custom string ending with "px".
            </p>
          </>
        )
      }
    />
  );
}
