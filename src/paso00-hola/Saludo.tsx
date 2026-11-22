// Paso 0 (~25 min): tu primer componente de React.
// Ábrelo en el navegador con `npm run dev` (pestaña Paso 0) y verifica con `npm run check:paso0`.

export interface SaludoProps {
  nombre: string;
  temas: string[];
}

export function Saludo({ nombre, temas }: SaludoProps) {
  // TODO 1: Hoy el título dice "Hola, mundo" aunque el componente reciba otro nombre.
  // Con <Saludo nombre="Ana" ... /> el título debe decir "Hola, Ana".

  // TODO 2: Hoy el botón "Sumar uno" cambia la variable, pero la pantalla sigue en "Clics: 0".
  // Cada clic debe sumar uno en pantalla.
  let clics = 0;

  function sumarUno() {
    clics = clics + 1;
    console.log("clics vale", clics);
  }

  return (
    <section aria-labelledby="titulo-saludo">
      <h2 id="titulo-saludo">Hola, mundo</h2>
      <p className="props-recibidas">Props recibidas: {JSON.stringify({ nombre, temas })}</p>

      <p>Clics: {clics}</p>
      <button type="button" onClick={sumarUno}>
        Sumar uno
      </button>

      <h3>Temas del curso</h3>
      {/* TODO 3: Hoy esta lista sale vacía. Debe mostrar un <li> por cada texto de `temas`. */}
      <ul aria-label="Temas del curso"></ul>
    </section>
  );
}
