function calcularSalario(cargo, salario){
    switch(cargo){
        case 1: //desenvolvedor
            if(salario >= 3000.00) salario -= (salario * 0.20);
            else salario -= (salario * 0.10);
            break;
        case 2: //DBA
            if(salario >= 2000.00) salario -= (salario * 0.25);
            else salario -= (salario * 0.15);
            break;
        case 3: //testador
            if(salario >= 2000.00) salario -= (salario * 0.25);
            else salario -= (salario * 0.15);
            break;
        case 4:
            if(salario >= 5000.00) salario -= (salario * 0.30);
            else salario -= (salario * 0.20);
            break;
        default:
            console.log('cargo nao informado');
    }
}

module.exports = calculoSalarios;