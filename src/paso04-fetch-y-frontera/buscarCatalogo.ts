import type { LibroCatalogo } from "./contrato";

// TODO (Paso 4 - Parte 1):
// fetch no lanza error cuando el servidor responde HTTP 404 o 500.
// Revisa response.ok antes de leer el JSON y lanza un Error con el código HTTP.
export async function obtenerLibro(
  id: string,
  fetcher: typeof fetch = fetch
): Promise<LibroCatalogo> {
  const response = await fetcher(`/api/libros/${encodeURIComponent(id)}`);
  return (await response.json()) as LibroCatalogo;
}
