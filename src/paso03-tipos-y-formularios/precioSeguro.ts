// TODO (Paso 3):
// Los valores de un <input> siempre llegan como texto (string).
// Reemplaza este atajo inseguro por una validación real sin usar `as number`:
// devuelve null si está vacío, si no es un número finito o si es <= 0.
export function leerPrecioSeguro(texto: string): number | null {
  const convertido = Number(texto) as number;
  return convertido;
}
