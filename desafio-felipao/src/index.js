//Usando readLine
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let nome = "";
let qtdeXP = "";

let classificacao = "";

// Função que pergunta o texto que for
function perguntarNome(texto) {
    readline.question(texto, (resposta) => {
        if (resposta.trim() === '') {
            texto = "Por favor, me informe seu nome, herói.\n";

            perguntarNome(texto);
        } else {
            nome = resposta;
            perguntarExperiencia("Quanto você tem de experiência, herói?\n");
        }
    });
}
function perguntarExperiencia(texto){
    readline.question(texto, (resposta) => {
        if (resposta.trim() === '') {
            texto = "Por favor, me informe: Quanto você tem de experiência, herói?\n";

            perguntarExperiencia(texto);
        } else {
            qtdeXP = resposta;
            let xpConvertido = Number(qtdeXP);

            if (typeof xpConvertido === 'number' && !isNaN(xpConvertido)) {
                if(xpConvertido <= 1000){
                    classificacao = "Ferro";
                } else if(xpConvertido >= 1001 && xpConvertido <= 2000){
                    classificacao = "Bronze";
                } else if(xpConvertido >= 2001 && xpConvertido <= 5000){
                    classificacao = "Prata";
                } else if(xpConvertido >= 5001 && xpConvertido <= 7000){
                    classificacao = "Ouro";
                } else if(xpConvertido >= 7001 && xpConvertido <= 8000){
                    classificacao = "Platina";
                } else if(xpConvertido >= 8001 && xpConvertido <= 9000){
                    classificacao = "Ascendente";
                } else if(xpConvertido >= 9001 && xpConvertido <= 10000){
                    classificacao = "Imortal";
                } else if(xpConvertido >= 10001){
                    classificacao = "Radiante";
                }

                concluir();
            } else {
                console.log(`"${qtdeXP}" não é um valor numérico válido.\n`);
                texto = "Por favor, me informe: Quanto você tem de experiência, herói?\n";

                perguntarExperiencia(texto);
            }
        }
    });
}
function concluir(){
    console.log(`O Herói de nome ${nome} está no nível de ${classificacao}.`);

    readline.close();
}

perguntarNome("Qual seu nome, herói?\n");