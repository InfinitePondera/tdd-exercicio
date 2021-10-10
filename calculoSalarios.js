function calcularSalario(cargo, salario){
    switch(cargo){
        case 1: //desenvolvedor
            if(salario >= 3000.00) salario -= (salario * 0.20);
            else salario -= (salario * 0.10);
            break;
        case 2:
            if(salario >= 2000.00) salario -= (salario * 0.25);
            else salario -= (salario * 0.15);
            break;
    }
}

module.exports = calculoSalarios;