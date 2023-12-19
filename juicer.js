function calculaCalorias() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const idade = parseInt(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    let atividade = parseInt(document.getElementById("atividadeFisica").value);
    let multiplicadorAtividade = 0;

    switch (atividade) {
        case 1: multiplicadorAtividade = 1.2; break;
        case 2: multiplicadorAtividade = 1.375; break;
        case 3: multiplicadorAtividade = 1.55; break;
        case 4: multiplicadorAtividade = 1.725; break;
        case 5: multiplicadorAtividade = 1.9; break;
        default: return 0; 
    }

    const baseTmb = (sexo === "feminino") ? 655 : 66;
    const multiplicadorPeso = (sexo === "feminino") ? 9.6 : 13.7;
    const multiplicadorAltura = (sexo === "feminino") ? 1.8 : 5;
    const multiplicadorIdade = (sexo === "feminino") ? 4.7 : 6.8;

    const tmb = multiplicadorAtividade * (baseTmb + (multiplicadorPeso * peso + multiplicadorAltura * altura + multiplicadorIdade * idade));
    return tmb;
}

function consumoDiario() {
    const tmb = calculaCalorias();
    const retornoConsumo = document.getElementById("caloriasDia");
    retornoConsumo.innerHTML = tmb.toFixed(2) + "kCal"; 

    const objetivo = parseInt(document.getElementById("objetivo").value);
    const peso = parseFloat(document.getElementById("peso").value);
    
    let proteina = peso * 2;
    let gordura = peso;
    let fatorCarbos = (objetivo === 1) ? 0.9 : 1.05;
    let carbos = (((tmb - proteina * 4 - gordura * 9)*fatorCarbos)/4).toFixed(2); 
    
    const retornoProteina = document.getElementById("proteinas");
    retornoProteina.innerHTML = proteina + "g";

    const retornoGordura = document.getElementById("gorduras");
    retornoGordura.innerHTML = gordura + "g";

    const retornoCarbos = document.getElementById("carboidratos");
    retornoCarbos.innerHTML = carbos + "g";
}