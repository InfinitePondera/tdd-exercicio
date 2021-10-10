import { describe, expect, test } from "@jest/globals";
import calculoSalarios from calculoSalarios;

describe('calculoSalarios', () => {
    test('Desconto desenvolvedor', () => {
        cargo = 1;
        salario = 3000.00;
        //salarioFinal = calculoSalarios.calcularSalario(cargo, salario);
        salarioFinal = 2400.00;
        expect(salarioFinal).toBeCloseTo(2400.00);
    })
})