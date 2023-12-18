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
    const tmb = multiplicadorAtividade * (baseTmb + (9.6 * peso + 1.8 * altura - (sexo === "feminino" ? 4.7 : 6.8) * idade));
    return tmb;
}

function consumoDiario() {
    const tmb = calculaCalorias();
    const retornoConsumo = document.getElementById("caloriasDia");
    retornoConsumo.innerHTML = tmb.toFixed(2) + "kCal"; 

    const objetivo = parseInt(document.getElementById("objetivo").value);
    const peso = parseFloat(document.getElementById("peso").value);
    
    let proteina = 0;
    let carbos = 0;
    let gordura = 0;
    
    if (objetivo == 1){
        proteina = peso * 2;
        gordura = peso;
        carbos = peso * 3; 
    } else {
        proteina = peso * 2;
        gordura = peso;
        carbos = peso * 4; 
    }
    
    const retornoProteina = document.getElementById("proteinas");
    retornoProteina.innerHTML = proteina + "g";

    const retornoGordura = document.getElementById("gorduras");
    retornoGordura.innerHTML = gordura + "g";

    const retornoCarbos = document.getElementById("carboidratos");
    retornoCarbos.innerHTML = carbos + "g";
}