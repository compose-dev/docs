import React from "react";
import Parameter from "../Parameter";

export default function LayoutAlignParameter({
  description,
  componentName,
}: {
  componentName: string;
  description?: string | ((lang: "js" | "py") => React.Node);
}) {
  return (
    <Parameter
      name="align"
      required={false}
      type="literal"
      description={
        description || (
          <>
            <p>
              Determine how the children are aligned along the cross axis of the{" "}
              {componentName}. Defaults to <code>"start"</code>.
            </p>
            <p>Options:</p>
            <ul>
              <li>
                <code>"start"</code>: Align children to the start of the
                container
              </li>
              <li>
                <code>"end"</code>: Align children to the end of the container
              </li>
              <li>
                <code>"center"</code>: Center children within the container
              </li>
              <li>
                <code>"baseline"</code>: Align children along their baseline
              </li>
              <li>
                <code>"stretch"</code>: Stretch children to fill the container
              </li>
            </ul>
          </>
        )
      }
    />
  );
}
