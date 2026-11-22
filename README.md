# Frontend On-Ramp

Este repositorio es un on-ramp, una nivelación práctica para llegar con lo mínimo al [curso de Frontend con React y Next.js](https://github.com/ykro/frontend-course). Está pensado para estudiantes que ya programan (estructuras de datos, algoritmos, orientación a objetos) pero no han construido una interfaz web con React. Todo corre en tu computadora con Node.js y Vite, sin cuentas externas.

![Mapa de Frontend On-Ramp](docs/diagrams/overview.svg)

## Por dónde empezar

Si es tu primera vez con React, sigue los pasos del 0 al 5 en orden; el recorrido completo toma unas tres horas y media. Para la Unidad 1 bastan los pasos 0, 1 (solo `CA-1.1` y `CA-1.2`), 2, 3 y 5, menos de tres horas; haz el CSS del Paso 1 y el Paso 4 antes de la Unidad 2.

Cada paso sigue la misma forma. Empieza con tres preguntas para pensar antes de tocar código, explica por qué importa para el curso, te pide leer, debuguear y escribir algo pequeño, y cierra con preguntas sobre un caso nuevo. Si te trabas, cada paso tiene tres pistas que van de la idea general a un esqueleto de código.

| Paso | Tiempo | Qué practicas | Archivo | Guía |
| --- | --- | --- | --- | --- |
| Paso 0 | 30 min | Instalar Node, levantar Vite y escribir tu primer componente con props, `useState` y `map` | [Saludo.tsx](src/paso00-hola/Saludo.tsx) | [steps/00-entorno-y-primer-componente](steps/00-entorno-y-primer-componente/README.md) |
| Paso 1 | 45 min | HTML semántico, roles y nombres accesibles, errores conectados al campo, Grid, Flexbox y `:focus-visible` | [TarjetaReserva.tsx](src/paso01-html-accesibilidad-y-css/TarjetaReserva.tsx) | [steps/01-html-accesibilidad-y-css](steps/01-html-accesibilidad-y-css/README.md) |
| Paso 2 | 30 min | Estado inmutable (`Object.is`) y `key` estable al filtrar listas | [ListaGastos.tsx](src/paso02-estado-inmutable/ListaGastos.tsx) | [steps/02-estado-inmutable](steps/02-estado-inmutable/README.md) |
| Paso 3 | 35 min | Validar el texto de un `<input>` con narrowing y luego con un esquema Zod | [precioSeguro.ts](src/paso03-tipos-y-formularios/precioSeguro.ts), [filtroPrecio.ts](src/paso03-tipos-y-formularios/filtroPrecio.ts) | [steps/03-tipos-y-formularios](steps/03-tipos-y-formularios/README.md) |
| Paso 4 | 45 min | `response.ok`, cancelar búsquedas con `AbortController` y la frontera entre cliente y servidor | [BuscadorRapido.tsx](src/paso04-fetch-y-frontera/BuscadorRapido.tsx) | [steps/04-fetch-y-frontera](steps/04-fetch-y-frontera/README.md) |
| Paso 5 | 40 min | Tests desde cero con Vitest que se ponen en rojo ante dos versiones con un bug, y un test de componente con `getByRole` | [tests/paso05.test.tsx](tests/paso05.test.tsx) | [steps/05-pruebas-desde-cero](steps/05-pruebas-desde-cero/README.md) |

## Inicio rápido

1. Instala [Node.js](https://nodejs.org/en/download) 24, la versión que indica `.nvmrc`, y clona este repositorio con `git clone https://github.com/ykro/frontend-onramp.git` (el [Paso 0](steps/00-entorno-y-primer-componente/README.md) explica la terminal si nunca la has usado).
2. Corre `npm install` en la raíz.
3. Corre `npm run dev` y abre la URL que imprime Vite. Cada paso tiene su pestaña.
4. Sigue el [Paso 0](steps/00-entorno-y-primer-componente/README.md) y verifica cada paso con `npm run check:paso0` hasta `npm run check:paso5`. `npm run check` corre todos juntos y `npm run build` confirma que el proyecto compila.

Al inicio todos los checks fallan a propósito; cada uno pasa cuando resuelves su paso.

## Errores comunes al preparar el entorno

| Lo que ves | Qué significa | Qué hacer |
| --- | --- | --- |
| `npm: command not found` o `node: command not found` | Node.js no está instalado o la terminal no lo encuentra | Instala Node 24 desde [nodejs.org](https://nodejs.org/en/download) o con `nvm install`, cierra y abre la terminal |
| `npm install` muestra `EBADENGINE` o errores raros de sintaxis | Tu Node es más viejo que el que pide el proyecto | Revisa `node -v`; debe empezar con `v24`. Con nvm, corre `nvm use` en la raíz del repo |
| `npm run dev` dice que el puerto `5173` está ocupado | Otro servidor de Vite sigue abierto | Vite prueba el siguiente puerto solo; usa la URL que imprime o cierra el otro con `Ctrl+C` |
| La página sale en blanco | Hay un error de JavaScript | Abre la consola del navegador (clic derecho, **Inspeccionar**, **Console**) y lee la primera línea roja |
| `check:pasoN` marca un error de tipos en otro paso | El check revisa los tipos de todo el proyecto, así que un paso a medias rompe los demás | Termina o deshaz el cambio a medias en ese otro archivo |
| `check:pasoN` dice `Cannot find module` | Falta `npm install` o lo corriste en otra carpeta | Corre `npm install` en la raíz del repo, donde está `package.json` |

## Lecturas cortas y uso de IA

- El [glosario](docs/glosario.md) explica cada término con un enlace a la documentación oficial.
- [Cómo leer un ADR](docs/adr-ejemplo.md) te prepara para el `ARCHITECTURE_DECISIONS.md` del curso.
- [Qué es la Integración Continua (CI)](docs/ci.md) explica qué corre GitHub Actions cuando haces push.
- [Firebase Auth y Cloud Firestore](docs/firebase.md) muestra la frontera entre cliente y servidor que usarás en el curso.
- Puedes usar tu asistente de IA (Claude Code, Antigravity, Codex o Gemini CLI). [AGENTS.md](AGENTS.md) le pide que te guíe con preguntas y pistas antes de mostrarte código. Si aceptas código que no puedes explicar con tus palabras, el on-ramp pierde su sentido.

## Repositorios relacionados

- Índice de on-ramps: [ykro/courses-onramp](https://github.com/ykro/courses-onramp)
- Curso principal: [ykro/frontend-course](https://github.com/ykro/frontend-course)
- Solución de referencia, con las respuestas de autoevaluación de cada paso: [ykro/frontend-onramp-solution](https://github.com/ykro/frontend-onramp-solution)
