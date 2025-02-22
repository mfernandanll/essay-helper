import { useState } from "react";
import { Paragraph } from "./Paragraph";

export function DraftEditor() {
  const [paragraphs, setParagraphs] = useState<{ id: number; text: string }[]>([]);
  const [newParagraph, setNewParagraph] = useState("");

  const addParagraph = () => {
    if (newParagraph.trim() === "") return;
    setParagraphs([...paragraphs, { id: Date.now(), text: newParagraph }]);
    setNewParagraph(""); 
  };

  const saveDraft = () => {
    alert("Rascunho salvo com sucesso!");
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
        {paragraphs.map((p) => (
          <Paragraph key={p.id} text={p.text} />
        ))}
      </div>

      <button onClick={saveDraft}>Salvar Rascunho</button>

      <div>
        <h3>Texto Completo</h3>
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          {paragraphs.map((p) => (
            <p key={p.id}>{p.text}</p>
          ))}
        </div>
      </div>

    </div>
  )
}