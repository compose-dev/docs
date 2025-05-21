import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

interface ParameterProps {
  name?: string | ((lang: "js" | "py") => string | React.Node);
  type?:
    | "string"
    | "boolean"
    | "literal"
    | "style"
    | "int"
    | "int_or_float"
    | "no-arguments-void-fn"
    | "any"
    | (string & {})
    | ((lang: "js" | "py") => string | React.Node);
  required: boolean;
  description?:
    | string
    | React.Node
    | ((lang: "js" | "py") => string | React.Node);
  version?: string;
  divider?: boolean;
  idSuffix?: string;
}

export default function Parameter({
  name,
  type,
  required,
  description,
  version,
  divider = true,
  idSuffix,
}: ParameterProps) {
  const requiredText = required ? "required" : "optional";

  function getJSType() {
    if (typeof type === "function") {
      return type("js");
    }

    if (type && type === "string") {
      return "string";
    }

    if (type && type === "boolean") {
      return "boolean";
    }

    if (type && type === "literal") {
      return "string literal";
    }

    if (type && type === "style") {
      return "Style";
    }

    if (type && (type === "int" || type === "int_or_float")) {
      return "number";
    }

    if (type && type === "any") {
      return "any";
    }

    if (type && type === "no-arguments-void-fn") {
      return "() => void";
    }

    return type;
  }

  function getPYType() {
    if (typeof type === "function") {
      return type("py");
    }

    if (type && type === "string") {
      return "str";
    }

    if (type && type === "boolean") {
      return "bool";
    }

    if (type && type === "literal") {
      return "Literal";
    }

    if (type && type === "style") {
      return "Style | None";
    }

    if (type && type === "int") {
      return "int";
    }

    if (type && type === "int_or_float") {
      return "int | float";
    }

    if (type && type === "any") {
      return "Any";
    }

    if (type && type === "no-arguments-void-fn") {
      return "Callable[[], None]";
    }

    return type;
  }

  function getJSName() {
    if (typeof name === "function") {
      return name("js");
    }

    if (required === false) {
      return `properties.${name}`;
    }

    return name;
  }

  function getPYName() {
    if (typeof name === "function") {
      return name("py");
    }

    return name;
  }

  function getDescription(lang: "js" | "py") {
    if (typeof description === "function") {
      return description(lang);
    }

    return description;
  }

  function getID(lang: "js" | "py") {
    let baseName = typeof name === "function" ? name("py") : name;

    // Convert baseName to lowercase and replace dots with dashes
    baseName = baseName.toLowerCase().replace(/\./g, "-");

    // Replace camelCase with dashes
    baseName = baseName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

    // Replace snake_case with dashes
    baseName = baseName.replace(/_/g, "-");

    if (idSuffix) {
      baseName += `-${idSuffix}`;
    }

    return baseName;
  }

  return (
    <>
      <Tabs groupId="sdkLanguage" className="hide_tabs">
        <TabItem value="node" label="TypeScript / JavaScript">
          <div className="api_parameter_container">
            <h4
              className="api_parameter"
              style={{ display: "inline" }}
              id={getID("js")}
            >
              {getJSName()}
            </h4>{" "}
            <span className={required ? "required-pill" : "optional-pill"}>
              {requiredText}
            </span>{" "}
            <span className="type-pill">{getJSType()}</span>
            {version && <span className="version-pill">SDK v{version}+</span>}
          </div>
          <div>{getDescription("js")}</div>
        </TabItem>
        <TabItem value="python" label="Python">
          <div className="api_parameter_container">
            <h4
              className="api_parameter"
              style={{ display: "inline" }}
              id={getID("py")}
            >
              {getPYName()}
            </h4>{" "}
            <span className={required ? "required-pill" : "optional-pill"}>
              {requiredText}
            </span>{" "}
            <span className="type-pill">{getPYType()}</span>
            {version && <span className="version-pill">SDK v{version}+</span>}
          </div>
          <div>{getDescription("py")}</div>
        </TabItem>
      </Tabs>
      {divider && <hr id="parameter-divider" />}
    </>
  );
}
