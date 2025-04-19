
import { useState } from "react";

const questions = [
  {
    type: "mcq",
    question: "¿Cuál es el rango típico de relajación T2 del cartílago articular?",
    options: ["1–3 ms", "10–30 ms", "50–70 ms", ">100 ms"],
    answer: "10–30 ms"
  },
  {
    type: "mcq",
    question: "¿Qué artefacto puede causar una hiperintensidad falsa en un tendón con orientación oblicua al campo magnético?",
    options: ["Chemical shift", "Inhomogeneidad de B0", "Artefacto de eco de gradiente", "Efecto ángulo mágico"],
    answer: "Efecto ángulo mágico"
  },
  {
    type: "mcq",
    question: "¿Cuál de las siguientes técnicas de supresión de grasa es más robusta ante inhomogeneidades del campo magnético (B0)?",
    options: ["FatSat (ChemSat)", "Dixon", "STIR", "IDEAL Water-only"],
    answer: "STIR"
  },
  {
    type: "mcq",
    question: "El aumento de ancho de banda de recepción (RBW):",
    options: ["Mejora la SNR", "Empeora la resolución espacial", "Reduce el artefacto por desplazamiento químico", "No afecta la imagen"],
    answer: "Reduce el artefacto por desplazamiento químico"
  },
  {
    type: "truefalse",
    question: "La técnica PROPELLER reduce los artefactos por movimiento y es útil en estudios musculoesqueléticos.",
    answer: true
  },
  {
    type: "truefalse",
    question: "En paralelo imaging, el uso de múltiples canales disminuye el tiempo de adquisición pero aumenta el ruido.",
    answer: true
  },
  {
    type: "truefalse",
    question: "La imagen T1 rho se usa principalmente para evaluar degeneración del colágeno en cartílago.",
    answer: false
  },
  {
    type: "truefalse",
    question: "La secuencia STIR permite valorar el realce con gadolinio con alta sensibilidad.",
    answer: false
  },
  {
    type: "mcq",
    question: "En una RM de hombro a 3T, el radiólogo nota hiperseñal en el supraespinoso en una secuencia T1 sin contraste. ¿Cuál es la causa más probable?",
    options: ["Lesión parcial", "Fatty infiltration", "Edema agudo", "Artefacto de tipo chemical shift"],
    answer: "Fatty infiltration"
  },
  {
    type: "checkbox",
    question: "¿Qué parámetros ayudan a reducir artefactos metálicos? (Selecciona los tres correctos)",
    options: ["Aumento de RBW", "Disminución del FOV", "Secuencias de eco de gradiente", "Uso de FatSat", "Fast Spin Echo con ETL largo"],
    answer: ["Aumento de RBW", "Disminución del FOV", "Fast Spin Echo con ETL largo"]
  }
];

export default function MSKTest() {
  const [answers, setAnswers] = useState({});

  const handleChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Autoevaluación MSK – Módulo 1</h1>
      {questions.map((q, i) => (
        <div key={i} style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "16px", borderRadius: "8px" }}>
          <p style={{ fontWeight: "bold" }}>{i + 1}. {q.question}</p>
          {q.type === "mcq" && (
            q.options.map((opt, idx) => (
              <div key={idx}>
                <input
                  type="radio"
                  name={`q-${i}`}
                  value={opt}
                  onChange={() => handleChange(i, opt)}
                /> {opt}
              </div>
            ))
          )}
          {q.type === "truefalse" && (
            [true, false].map((opt, idx) => (
              <div key={idx}>
                <input
                  type="radio"
                  name={`q-${i}`}
                  value={opt.toString()}
                  onChange={() => handleChange(i, opt)}
                /> {opt ? "Verdadero" : "Falso"}
              </div>
            ))
          )}
          {q.type === "checkbox" && (
            q.options.map((opt, idx) => (
              <div key={idx}>
                <input
                  type="checkbox"
                  value={opt}
                  onChange={(e) => {
                    const current = answers[i] || [];
                    const updated = e.target.checked
                      ? [...current, opt]
                      : current.filter((v) => v !== opt);
                    handleChange(i, updated);
                  }}
                /> {opt}
              </div>
            ))
          )}
        </div>
      ))}

      <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
        <p style={{ fontWeight: "bold" }}>11. Informe estructurado breve (respuesta libre):</p>
        <textarea
          style={{ width: "100%", minHeight: "100px", marginTop: "8px" }}
          placeholder="Describe los hallazgos esperables en una RM de cadera con cartílago articular dañado..."
          onChange={(e) => handleChange("informe", e.target.value)}
        />
      </div>

      <button
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px" }}
        onClick={() => alert("Respuestas guardadas. Revisión manual sugerida para el informe.")}
      >
        Finalizar
      </button>
    </div>
  );
}
