// TODO (Paso 3): Hoy esta función deja pasar cualquier texto. "" se vuelve 0, "abc" se vuelve
// NaN y "-15" pasa como precio. Debe devolver el número solo si es finito y mayor que cero, y
// null en cualquier otro caso, incluido el texto vacío o con solo espacios. Sin usar `as`.
export function leerPrecioSeguro(texto: string): number | null {
  const convertido = Number(texto) as number;
  return convertido;
}
