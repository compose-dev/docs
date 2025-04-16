import Parameter from "../Parameter";
import { ComponentProps } from "react";

export default function TextColorParameter({
  parameterName,
  componentName,
  defaultValue,
}: {
  parameterName: ComponentProps<typeof Parameter>["name"];
  componentName: string;
  defaultValue: string;
}) {
  return (
    <Parameter
      name={parameterName}
      required={false}
      type="literal"
      description={
        <>
          <p>
            Specifies the color of the {componentName}. Defaults to{" "}
            <code>{defaultValue}</code>
          </p>
          <p>Options:</p>
          <ul>
            <li>
              <code>"text"</code>: Default text color
            </li>
            <li>
              <code>"text-secondary"</code>: Secondary text color, uses a
              lighter shade of the default text color
            </li>
            <li>
              <code>"primary"</code>: Primary color. Defaults to a shade of
              blue. Can be set via the{" "}
              <a href="/guides/styling-your-app#theming">theme</a>.
            </li>
            <li>
              <code>"success"</code>: Success color, green.
            </li>
            <li>
              <code>"warning"</code>: Warning color, orange.
            </li>
            <li>
              <code>"danger"</code>: Danger color, red.
            </li>
            <li>
              <code>"background"</code>: Background color. Can be used over
              inverted backgrounds.
            </li>
          </ul>
        </>
      }
    />
  );
}
