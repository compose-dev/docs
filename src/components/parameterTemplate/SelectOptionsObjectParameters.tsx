import React from "react";
import Parameter from "../Parameter";

export default function SelectOptionsObjectParameters() {
  return (
    <>
      <Parameter
        name="label"
        required={true}
        type="string"
        description="The user-facing label to use for the option."
      />
      <Parameter
        name="value"
        required={true}
        type={(lang) =>
          lang === "js"
            ? "string | number | boolean"
            : "str | float | int | bool"
        }
        description={(lang) => (
          <p>
            The internal value to assign to the option and use when submitting a
            form or executing callbacks such as{" "}
            <code>{lang === "js" ? "onChange" : "on_change"}</code>.
          </p>
        )}
      />
      <Parameter
        name={(lang) => "description"}
        required={false}
        type={"string"}
        description="Helpful text to display beneath the label."
      />
    </>
  );
}
