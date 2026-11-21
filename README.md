# On-Ramp Frontend (60 minutos)

Este repositorio te prepara antes de empezar el curso [frontend-course](https://github.com/ykro/frontend-course). Forma parte del índice de kits de nivelación [courses-onramp](https://github.com/ykro/courses-onramp).

Resolverás tres laboratorios cortos de unos 20 minutos cada uno. Si te trabas y quieres comparar tu resultado con una versión completa y explicada paso a paso, consulta el repositorio de solución: [frontend-onramp-solution](https://github.com/ykro/frontend-onramp-solution).

## Qué necesitas

- Node.js 24 (usa el archivo `.nvmrc` si trabajas con `nvm`).
- Un navegador moderno y tu editor de código.

## Cómo empezar paso a paso

1. Clona este repositorio e instala las dependencias:

```bash
npm install
```

2. Abre la aplicación interactiva en tu navegador para ver y probar los tres laboratorios en vivo:

```bash
npm run dev
```

3. Corre la verificación automática en otra terminal para ver las 9 pruebas iniciales:

```bash
npm run check
```

`npm run check` ejecuta dos pasos: la revisión de tipos (`npm run typecheck`) y las pruebas automáticas (`npm run test`). Al principio, la revisión de tipos pasa en verde y las 9 pruebas fallan a propósito porque tú vas a corregir cada laboratorio.

4. Abre los laboratorios en orden. Cada carpeta tiene su propio `README.md` con pasos numerados pensados para que avances sin perderte, aunque digas "no entiendo por dónde empezar".

## Mapa de laboratorios (~60 minutos)

1. **[Lab 01: HTML semántico y accesibilidad](src/lab01-html-y-accesibilidad/README.md) (~20 min):**
   Conviertes una tarjeta armada con `<div>` en [HTML semántico](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html) navegable con teclado usando [`<section>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section), [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) (`htmlFor`), [`<input type="number">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number), [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select), [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), [`aria-invalid`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid) y [`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) para que funcionen las consultas [`ByRole` de Testing Library](https://testing-library.com/docs/queries/byrole/). Además, ordenas el diseño con [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) de 2 columnas, [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout) y un borde visible en [`:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible).

2. **[Lab 02: Estado inmutable, claves y tipos](src/lab02-estado-y-tipos/README.md) (~20 min):**
   Corriges tres errores frecuentes en React y TypeScript:
   - Mutar un arreglo con `.push()` en lugar de [actualizar arreglos en estado sin mutarlos](https://react.dev/learn/updating-arrays-in-state), cuando React compara referencias con [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   - Usar el índice como clave en listas en lugar de [`key` estables en React](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key).
   - Forzar tipos con [aserciones de tipo (`as`)](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions) en vez de validar y hacer [estrechamiento de tipos (*narrowing*) en TypeScript](https://www.typescriptlang.org/docs/handbook/2/narrowing.html).

3. **[Lab 03: Asincronía y frontera cliente/servidor](src/lab03-async-y-frontera/README.md) (~20 min):**
   Resuelves tres fallos típicos al consultar datos desde el navegador:
   - Revisar [`response.ok` en Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok) porque `fetch` no rechaza la promesa cuando el servidor responde HTTP 404 o 500.
   - Cancelar búsquedas anteriores con [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) para evitar que una respuesta lenta pise una más reciente.
   - Separar un componente interactivo marcado con `"use client"` según el modelo de [Server and Client Components de Next.js](https://nextjs.org/docs/app/getting-started/server-and-client-components) para que no importe secretos del servidor.

## Glosario rápido con documentación oficial

| Concepto | Documentación oficial |
| :--- | :--- |
| HTML semántico | [MDN: Semantics in HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html) |
| Etiquetas `<label>` y `htmlFor` | [MDN: `<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) y [React: `htmlFor`](https://react.dev/reference/react-dom/components/common#common-props) |
| `aria-invalid` y `aria-describedby` | [MDN: `aria-invalid`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid) y [MDN: `aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) |
| Consultas `ByRole` | [Testing Library: `ByRole`](https://testing-library.com/docs/queries/byrole/) |
| CSS Grid y CSS Flexbox | [MDN: CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) y [MDN: CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout) |
| Indicador de foco `:focus-visible` | [MDN: `:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) |
| Actualizar arreglos en React | [React: Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state) |
| Comparación `Object.is` | [MDN: `Object.is()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) |
| Claves (`key`) en listas | [React: Keeping list items in order with `key`](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key) |
| Narrowing y type assertions | [TypeScript: Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) y [TypeScript: Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions) |
| `Response.ok` en Fetch API | [MDN: `Response.ok`](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok) |
| Cancelación con `AbortController` | [MDN: `AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) |
| `"use client"` y frontera cliente/servidor | [Next.js: Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) |

## Uso de IA

Puedes usar asistentes de IA libremente durante los tres laboratorios. El archivo [AGENTS.md](AGENTS.md) configura al asistente en modo tutor socrático para que te explique cada concepto, te dé pistas concretas y te guíe paso a paso cuando le preguntes.

## Enlaces relacionados

- Índice de kits de nivelación: [https://github.com/ykro/courses-onramp](https://github.com/ykro/courses-onramp)
- Curso principal de Frontend: [https://github.com/ykro/frontend-course](https://github.com/ykro/frontend-course)
- Solución completa y explicada: [https://github.com/ykro/frontend-onramp-solution](https://github.com/ykro/frontend-onramp-solution)
