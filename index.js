//  Desafio - Classificador de nível de Herói

// Digite o nome do herói
let nomeDoHeroi = "Aquaman"

// Digite a quantidade de XP de 0 a 10500
let experienciaDoHeroi = 10500

let nivel = ""

if (experienciaDoHeroi < 1000) {
    nivel = "Ferro"
} else if ((experienciaDoHeroi >= 1000) && (experienciaDoHeroi <= 2000)) {
    nivel = "Bronze"
} else if ((experienciaDoHeroi >= 2001) && (experienciaDoHeroi <= 5000)) {
    nivel = "Prata"
} else if ((experienciaDoHeroi >= 5001) && (experienciaDoHeroi <= 7000)) {
    nivel = "Ouro"
} else if ((experienciaDoHeroi >= 7001) && (experienciaDoHeroi <= 8000)) {
    nivel = "Platina"
} else if ((experienciaDoHeroi >= 8001) && (experienciaDoHeroi <= 9000)) {
    nivel = "Ascendente"
} else if ((experienciaDoHeroi >= 9001) && (experienciaDoHeroi <= 10000)) {
    nivel = "Imortal"
} else if (experienciaDoHeroi >= 10001){
    nivel = "Radiante!"
} 

//  Saída
console.log("O Herói de nome " + nomeDoHeroi + ", está no nível de " + nivel + "!" )