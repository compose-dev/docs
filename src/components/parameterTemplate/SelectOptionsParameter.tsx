import React from "react";
import Parameter from "../Parameter";

export default function SelectOptionsParameter({
  optionsSectionLink,
}: {
  optionsSectionLink: string;
}) {
  return (
    <Parameter
      name="options"
      required={true}
      type={(lang) =>
        lang === "js"
          ? "Array<OptionValue | DetailedValue>"
          : "list[OptionValue | DetailedValue]"
      }
      description={
        <p>
          The list of options that can be selected. See the{" "}
          <a href={optionsSectionLink}>options</a> section for more info.
        </p>
      }
    />
  );
}
