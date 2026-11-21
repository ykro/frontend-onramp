// TODO (Paso 5 - Parte 3):
// 1. Agrega la directiva "use client"; en la primera línea de este archivo.
// 2. Deja de importar desde "./secreto.server" e importa LIMITE_RESULTADOS desde "./contrato".
import { useEffect, useState } from "react";
import { LIMITE_RESULTADOS } from "./secreto.server";

export interface BuscadorRapidoProps {
  buscar: (termino: string, signal: AbortSignal) => Promise<string[]>;
}

export function BuscadorRapido({ buscar }: BuscadorRapidoProps) {
  const [termino, setTermino] = useState("");
  const [resultados, setResultados] = useState<string[]>([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const limpio = termino.trim();
    if (limpio === "") {
      setResultados([]);
      setCargando(false);
      return;
    }

    // TODO (Paso 5 - Parte 2):
    // Esta búsqueda no cancela el intento anterior. Si una respuesta vieja (120 ms)
    // llega después de una nueva (15 ms), pisa la pantalla.
    // Usa AbortController y llama a controller.abort() en la limpieza del efecto.
    const controller = new AbortController();
    setCargando(true);

    buscar(limpio, controller.signal)
      .then((lista) => {
        setResultados(lista.slice(0, LIMITE_RESULTADOS));
        setCargando(false);
      })
      .catch(() => {
        setResultados([]);
        setCargando(false);
      });
  }, [termino, buscar]);

  return (
    <section aria-labelledby="titulo-buscador">
      <h2 id="titulo-buscador" style={{ marginTop: 0 }}>
        Buscador de catálogo
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px" }}>
        <label htmlFor="campo-busqueda">Buscar tema</label>
        <input
          id="campo-busqueda"
          type="search"
          value={termino}
          onChange={(e) => setTermino(e.target.value)}
          placeholder="Ej. React"
          style={{
            padding: "10px 12px",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            fontSize: "1rem",
          }}
        />
      </div>

      {cargando ? <p role="status">Buscando...</p> : null}

      <ul aria-label="Resultados de búsqueda" style={{ paddingLeft: "20px", margin: 0 }}>
        {resultados.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
