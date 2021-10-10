function calcularSalario(cargo, salario){
    switch(cargo){
        case 1: //desenvolvedor
            if(salario >= 3000.00) salario -= (salario * 0.20);
            else salario -= (salario * 0.10);
    }
}

module.exports = calculoSalarios;