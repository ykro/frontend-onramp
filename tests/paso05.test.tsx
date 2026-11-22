import { describe, expect, it } from "vitest";
import {
  calcularTotalConDescuento,
  calcularTotalConDescuentoConBug,
} from "../src/paso05-pruebas/calcularDescuento";

describe("Paso 5: Pruebas automatizadas desde cero con Vitest", () => {
  it("CA-5.1 calcula correctamente un caso normal (por ejemplo, Q200 con 15 % de descuento)", () => {
    // TODO (Paso 5 - Prueba 1):
    // Aplica Arrange -> Act -> Assert con calcularTotalConDescuento(200, 15).
    // Reemplaza la línea siguiente por tu expectativa real (170).
    const total = calcularTotalConDescuento(200, 15);
    expect(total).toBe(-1);
  });

  it("CA-5.2 maneja los casos borde de 0 % y 100 % de descuento", () => {
    // TODO (Paso 5 - Prueba 2):
    // Verifica que con 0 % el total siga siendo el precio original (ej. 120)
    // y que con 100 % el total sea 0.
    const sinDescuento = calcularTotalConDescuento(120, 0);
    const gratis = calcularTotalConDescuento(120, 100);
    expect([sinDescuento, gratis]).toEqual([-1, -1]);
  });

  it("CA-5.3 atrapa el bug de calcularTotalConDescuentoConBug", () => {
    // TODO (Paso 5 - Prueba 3):
    // Comprueba que calcularTotalConDescuentoConBug(200, 15) NO devuelve 170
    // (suma el descuento en lugar de restarlo y devuelve 230).
    const resultadoConBug = calcularTotalConDescuentoConBug(200, 15);
    expect(resultadoConBug).toBe(170);
  });
});
