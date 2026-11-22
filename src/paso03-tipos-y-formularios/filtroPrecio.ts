import { z } from "zod";

// TODO (Paso 3): El esquema acepta un mínimo de 0 o negativo y deja pasar un máximo menor que el
// mínimo. Agrega dos reglas: ambos montos deben ser mayores que cero, y `maximo` no puede ser
// menor que `minimo`. Esa segunda regla compara dos campos: va en `superRefine`, con el error
// en `path: ["maximo"]` y el mensaje "El máximo debe ser mayor o igual que el mínimo".
export const FiltroPrecio = z.object({
  minimo: z.coerce.number(),
  maximo: z.coerce.number(),
});

export type Filtro = z.infer<typeof FiltroPrecio>;

export type ResultadoFiltro =
  | { ok: true; filtro: Filtro }
  | { ok: false; errores: Record<string, string> };

// Esta función ya está bien. Léela: `safeParse` nunca lanza; devuelve éxito o la lista de errores.
export function validarFiltro(datos: unknown): ResultadoFiltro {
  const resultado = FiltroPrecio.safeParse(datos);
  if (resultado.success) {
    return { ok: true, filtro: resultado.data };
  }
  const errores: Record<string, string> = {};
  for (const issue of resultado.error.issues) {
    errores[issue.path.join(".")] ??= issue.message;
  }
  return { ok: false, errores };
}
