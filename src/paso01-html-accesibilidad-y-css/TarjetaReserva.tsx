import { useState } from "react";
import "./tarjeta-reserva.css";

const HORARIOS = ["09:00", "11:00", "15:00"] as const;

// TODO (Paso 1): Hoy esta tarjeta solo funciona con mouse.
// - Con Tab no se llega al horario ni al botón, y Enter no confirma la reserva.
// - Un lector de pantalla no encuentra la región, ni el nombre de cada campo, ni el botón.
// - La cantidad acepta cualquier texto. Fuera de 1 a 12 debe aparecer un error que diga
//   "entre 1 y 12", conectado al campo y anunciado por el lector de pantalla.
// - La confirmación se ve en pantalla, pero el lector de pantalla no la anuncia.
export function TarjetaReserva() {
  const [cantidadTexto, setCantidadTexto] = useState("2");
  const [horario, setHorario] = useState<string>(HORARIOS[0]);
  const [mensaje, setMensaje] = useState<string | null>(null);

  function confirmarConClick() {
    setMensaje(`Reserva para ${cantidadTexto} personas a las ${horario}.`);
  }

  return (
    <div className="reserva-card">
      <div className="reserva-titulo">Reservar sala de estudio</div>

      <div className="reserva-grid">
        <div className="reserva-campo">
          <div className="reserva-etiqueta">Cantidad de personas</div>
          <input
            type="text"
            value={cantidadTexto}
            onChange={(e) => setCantidadTexto(e.target.value)}
          />
        </div>

        <div className="reserva-campo">
          <div className="reserva-etiqueta">Horario</div>
          <div>
            {HORARIOS.map((hora) => (
              <span
                key={hora}
                onClick={() => setHorario(hora)}
                style={{
                  display: "inline-block",
                  marginRight: "8px",
                  padding: "6px 10px",
                  border: horario === hora ? "2px solid #1d4ed8" : "1px solid #cbd5e1",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                {hora}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="reserva-acciones">
        <div className="reserva-boton-falso" onClick={confirmarConClick}>
          Confirmar reserva
        </div>
        {mensaje ? <div>{mensaje}</div> : null}
      </div>
    </div>
  );
}
