console.log("INICIANDO TREINAMENTO DE TIRO!");

// Soldado 1
let soldado1_nome = "João";
let soldado1_arma = "Espada";
let soldado1_municao = 5;

console.log(soldado1_nome + " pegou sua " + soldado1_arma + " e começou a atirar!");

while (soldado1_municao > 0) {
    console.log(soldado1_nome + " dispara sua " + soldado1_arma + "! Munição restante: " + (soldado1_municao - 1));
    soldado1_municao--;
}

console.log(soldado1_nome + " completou o treinamento com sucesso!\n");

// Soldado 2
let soldado2_nome = "Maria";
let soldado2_arma = "Arco e Flecha";
let soldado2_municao = 5;

console.log(soldado2_nome + " pegou sua " + soldado2_arma + " e começou a atirar!");

while (soldado2_municao > 0) {
    console.log(soldado2_nome + " dispara sua " + soldado2_arma + "! Munição restante: " + (soldado2_municao - 1));
    soldado2_municao--;
}

console.log(soldado2_nome + " completou o treinamento com sucesso!\n");

// Soldado 3
let soldado3_nome = "Pedro";
let soldado3_arma = "Lança";
let soldado3_municao = 5;

console.log(soldado3_nome + " pegou sua " + soldado3_arma + " e começou a atirar!");

while (soldado3_municao > 0) {
    console.log(soldado3_nome + " lança sua " + soldado3_arma + "! Munição restante: " + (soldado3_municao - 1));
    soldado3_municao--;
}

console.log(soldado3_nome + " completou o treinamento com sucesso!\n");


// Destruir Prédio 

let predio = 1000; 

for (let i = 0; i < 500; i+= 100){
    console.log(soldado1_nome + " Causou dano 10 no prédio")
    predio -= 100;
}

console.log("Dano Final: " +predio);

let predio_while = 1000;

while (predio_while != 0){
     predio_while -= 100;
     console.log(soldado2_nome + " Causou dano 100 no prédio");
}

console.log("Dano Final: " + predio_while);
