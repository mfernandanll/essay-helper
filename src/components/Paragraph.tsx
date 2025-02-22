interface ParagraphProps {
  text: string;
}

export function Paragraph({text} : ParagraphProps) {
  return <p>{text}</p>
}
