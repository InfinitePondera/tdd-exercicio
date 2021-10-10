import { describe, expect, test } from "@jest/globals";
import calculoSalarios from calculoSalarios;

describe('calculoSalarios', () => {
    test('Desconto desenvolvedor', () => {
        tipo = 1;
        salario = 3000.00;
        salarioFinal = calculoSalarios.calcularSalario(tipo, salario);
        expect(salarioFinal).toBeCloseTo(2400.00)
    })
})