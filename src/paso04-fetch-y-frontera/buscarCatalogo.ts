import type { LibroCatalogo } from "./contrato";

// TODO (Paso 4 - Parte 1): Hoy, si el servidor responde 404 o 500, esta función lee el cuerpo
// como si fuera un libro. Debe rechazar con un Error que mencione el código HTTP.
export async function obtenerLibro(
  id: string,
  fetcher: typeof fetch = fetch
): Promise<LibroCatalogo> {
  const response = await fetcher(`/api/libros/${encodeURIComponent(id)}`);
  return (await response.json()) as LibroCatalogo;
}
