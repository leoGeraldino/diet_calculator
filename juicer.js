function calculaCalorias() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const idade = parseInt(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    let atividade = parseInt(document.getElementById("atividadeFisica").value);
    let tmb = 0;

    if (sexo === "feminino"){
        switch (atividade){
            case 1:
                tmb = 1.2 * (655 + (9.6 * peso + 1.8 * altura - 4.7 * idade));
                return tmb; 
            case 2:
                tmb = 1.375 * (655 + (9.6 * peso + 1.8 * altura - 4.7 * idade));
                return tmb; 
            case 3:
                tmb = 1.55 * (655 + (9.6 * peso + 1.8 * altura - 4.7 * idade));
                return tmb; 
            case 4:
                tmb = 1.725 * (655 + (9.6 * peso + 1.8 * altura - 4.7 * idade));
                return tmb; 
            case 5: 
                tmb = 1.9 * (655 + (9.6 * peso + 1.8 * altura - 4.7 * idade));
                return tmb;
        }
    }   else {
        switch(atividade){
            case 1: 
                tmb = 1.2 * (66 + (13.7 * peso + 5 * altura - 6.8 * idade));
                return tmb;
            case 2: 
                tmb = 1.375 * (66 + (13.7 * peso + 5 * altura - 6.8 * idade));
                return tmb;
            case 3: 
                tmb = 1.55 * (66 + (13.7 * peso + 5 * altura - 6.8 * idade));
                return tmb;
            case 4: 
                tmb = 1.725 * (66 + (13.7 * peso + 5 * altura - 6.8 * idade));
                return tmb;
            case 5: 
                tmb = 1.9 * (66 + (13.7 * peso + 5 * altura - 6.8 * idade));
                return tmb;
        }
    }
}

function consumoDiario() {
    const tmb = calculaCalorias();
    const retornoConsumo = document.getElementById("caloriasDia");
    retornoConsumo.innerHTML = tmb.toFixed(2); 
}

