import { useState } from "react";

export function DraftEditor() {
  const [paragraphs, setParagraphs] = useState<{ id: number; text: string }[]>([]);
  const [newParagraph, setNewParagraph] = useState("");

  const addParagraph = () => {
    if (newParagraph.trim() === "") return;
    setParagraphs([...paragraphs, { id: Date.now(), text: newParagraph }]);
    setNewParagraph(""); 
  };

  return (
    <div>
      <h2>Editor de Redação</h2>
      <textarea
        value={newParagraph}
        onChange={(e) => setNewParagraph(e.target.value)}
        placeholder="Digite seu parágrafo aqui..."
      />
      <button onClick={addParagraph}>Adicionar Parágrafo</button>

      <div>
        <h3>Rascunho</h3>
        <p>Parágrafo</p>
      </div>
    </div>
  )
}