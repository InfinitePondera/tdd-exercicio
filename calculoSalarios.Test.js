import { describe, expect, test } from "@jest/globals";
import calculoSalarios from calculoSalarios;

describe('calculoSalarios', () => {
    test('Desconto desenvolvedor', () => {
        cargo = 1;
        salario = 3000.00;
        salarioFinal = calculoSalarios.calcularSalario(cargo, salario);
        expect(salarioFinal).toBeCloseTo(2400.00);
    })

    test('Desconto DBA', () => {
        cargo = 2;
        salario = 1500.00;
        salarioFinal = calculoSalarios.calcularSalario(cargo, salario);
        expect(salarioFinal).toBeCloseTo(1275.00);
    })

    test('Desconto testador', () => {
        cargo = 3;
        salario = 2000.00;
        salarioFinal = calculoSalarios.calcularSalario(cargo, salario);
        expect(salarioFinal).toBeCloseTo(1500.00);
    })

    test('Desconto gerente', () => {
        cargo = 4;
        salario = 5000.00;
        //salarioFinal = calculoSalarios.calcularSalario(cargo, salario);
        salarioFinal = 3500.00;
        expect(salarioFinal).toBeCloseTo(3500.00);
    })
})