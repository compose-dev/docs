import CodeBlock from "@theme/CodeBlock";

export default function ComposeFile({ lang }: { lang: "js" | "py" }) {
  if (lang === "js") {
    return (
      <CodeBlock language="typescript">
        {`{
    buffer: Buffer;
    name: string;
    type: string;
}`}
      </CodeBlock>
    );
  }

  if (lang === "py") {
    return (
      <CodeBlock language="python">
        {`class File(BytesIO):
  def __init__(self, content: bytes, file_name: str, file_type: str):
      super().__init__(content)
      self.name = file_name
      self.type = file_type`}
      </CodeBlock>
    );
  }

  throw new Error(`Unsupported language: ${lang}`);
}
