import React from "react";
import Parameter from "../Parameter";

export default function LayoutDirectionParameter({
  description,
}: {
  description?: string | ((lang: "js" | "py") => React.Node);
}) {
  return (
    <Parameter
      name="direction"
      required={false}
      type="literal"
      description={(lang) =>
        description || (
          <>
            <p>
              The direction in which the children should be arranged. Defaults
              to <code>"vertical"</code>.
            </p>
            <p>Options:</p>
            <ul>
              <li>
                <code>"vertical"</code>: Arrange children vertically (top to
                bottom)
              </li>
              <li>
                <code>"horizontal"</code>: Arrange children horizontally (left
                to right)
              </li>
              <li>
                <code>"vertical-reverse"</code>: Arrange children vertically in
                reverse order (bottom to top)
              </li>
              <li>
                <code>"horizontal-reverse"</code>: Arrange children horizontally
                in reverse order (right to left)
              </li>
            </ul>
            <p>
              The direction will automatically adjust to a vertical layout on
              mobile devices, which can be disabled by setting the{" "}
              <code>responsive</code> property to{" "}
              <code>{lang === "js" ? "false" : "False"}</code>.
            </p>
          </>
        )
      }
    />
  );
}
