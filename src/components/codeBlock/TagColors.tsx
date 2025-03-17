import CodeBlock from "@theme/CodeBlock";

export default function TagColors({ lang }: { lang: "js" | "py" }) {
  if (lang === "js") {
    return (
      <CodeBlock language="typescript">
        {`{
  key: "status",
  format: "tag",
  tagColors: {
    purple: ["todo", "backlog"],
    orange: "in_progress",
    green: "done",
    _default: "gray" // Render any unmapped values as gray
  }
}`}
      </CodeBlock>
    );
  }

  if (lang === "py") {
    return (
      <CodeBlock language="python">
        {`{
  "key": "status",
  "format": "tag",
  "tag_colors": {
    "purple": ["todo", "backlog"],
    "orange": "in_progress",
    "green": "done",
    "_default": "gray" # Render any unmapped values as gray
  }
}`}
      </CodeBlock>
    );
  }

  throw new Error(`Unsupported language: ${lang}`);
}
