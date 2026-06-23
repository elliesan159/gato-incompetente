const telaInicial =
document.getElementById("telaInicial");

const jogo =
document.getElementById("jogo");

const nomeInput =
document.getElementById("nomeInput");

const adotarBtn =
document.getElementById("adotarBtn");

const tituloGato =
document.getElementById("tituloGato");

const eventoTexto =
document.getElementById("evento");

const justificativaTexto =
document.getElementById("justificativa");

const historico =
document.getElementById("historico");

const botaoDesastre =
document.getElementById("botaoDesastre");

const paises =
document.querySelectorAll(".pais");

const gato =
document.getElementById("gato");

const finalSurpresa =
document.getElementById("finalSurpresa");

const mensagemFinal =
document.getElementById("mensagemFinal");

const abracarGato =
document.getElementById("abracarGato");

const ronrom =
document.getElementById("ronrom");

let nomeGato = "Bigodes";

let capituloAtual = 0;

const historia = [

{
evento:"🐱 Você encontrou um gato muito estranho.",
justificativa:"Ele apareceu do nada e decidiu morar com você."
},

{
evento:"📦 O gato encontrou uma caixa misteriosa.",
justificativa:"Ele imediatamente declarou a caixa como território nacional."
},

{
evento:"👑 O Reino da Caixa foi fundado.",
justificativa:"Seu gato se tornou rei sem realizar eleições."
},

{
evento:"📜 Uma constituição foi criada.",
justificativa:"A única lei era: mais atum para todos."
},

{
evento:"🐦 Um grupo de pombos entrou no reino.",
justificativa:"Foi criado o Ministério dos Pombos."
},

{
evento:"🏛️ O reino começou a cobrar impostos.",
justificativa:"O pagamento era feito exclusivamente em petiscos."
},

{
evento:"🌎 Uma carta foi enviada para vários países.",
justificativa:"Seu gato queria reconhecimento internacional."
},

{
evento:"🚫 Os países recusaram a proposta.",
justificativa:"Seu gato ficou profundamente ofendido."
},

{
evento:"⚔️ Seu gato declarou guerra diplomática.",
justificativa:"Ninguém levou muito a sério."
},

{
evento:"✈️ Após perder a guerra, ele fugiu.",
justificativa:"Chamou isso de retirada estratégica."
},

{
evento:"🌍 Alguns países decidiram bani-lo.",
justificativa:"A situação saiu um pouco do controle."
},

{
evento:"🐟 Seu gato abriu uma empresa de atum.",
justificativa:"Pela primeira vez parecia um plano inteligente."
},

{
evento:"📈 A empresa cresceu rapidamente.",
justificativa:"Os investidores estavam impressionados."
},

{
evento:"📉 A empresa faliu em poucos minutos.",
justificativa:"Todo o estoque desapareceu misteriosamente."
},

{
evento:"🚀 Seu gato decidiu fugir para a Lua.",
justificativa:"la ele encontrou uma coisa."
},

{
evento:"📚 Seu gato encontrou uma biblioteca misteriosa.",
justificativa:"Entre milhares de livros, havia uma lembrança muito especial escondida."
},

{
evento:"💋 Dentro da biblioteca havia a memória de um primeiro beijo.",
justificativa:"Uma lembrança que continuou brilhando mesmo depois de todo esse tempo."
},

{
evento:"🧡 ele foi no estacionamento da biblioteca, seu gato encontrou uma flor laranja.",
justificativa:"Ele percebeu que aquela flor guardava um significado enorme e algo escrito."
}

];

adotarBtn.addEventListener("click", () => {

    let nomeDigitado =
    nomeInput.value.trim();

    if(nomeDigitado !== ""){
        nomeGato = nomeDigitado;
    }

    tituloGato.textContent =
    "🐱 " + nomeGato;

    telaInicial.style.display =
    "none";

    jogo.style.display =
    "block";

});

botaoDesastre.addEventListener("click", () => {

    if(capituloAtual >= historia.length){

        abrirFinal();

        return;
    }

    const parte =
    historia[capituloAtual];

    efeitoDigitacao(
        eventoTexto,
        parte.evento,
        25
    );

    efeitoDigitacao(
        justificativaTexto,
        parte.justificativa,
        12
    );

    const item =
    document.createElement("li");

    item.textContent =
    parte.evento;

    historico.prepend(item);

    animarGato();

    banirPais();

    capituloAtual++;

});

function efeitoDigitacao(
elemento,
texto,
velocidade
){

    elemento.textContent = "";

    let i = 0;

    const intervalo =
    setInterval(() => {

        elemento.textContent +=
        texto.charAt(i);

        i++;

        if(i >= texto.length){

            clearInterval(intervalo);

        }

    }, velocidade);

}

function animarGato(){

    gato.style.transition =
    "0.5s";

    const rotacao =
    (Math.random()*20)-10;

    gato.style.transform =
    `translateY(-15px) rotate(${rotacao}deg)`;

    setTimeout(() => {

        gato.style.transform =
        "translateY(0px) rotate(0deg)";

    },500);

}

function banirPais(){

    if(capituloAtual < 10){
        return;
    }

    if(Math.random() > 0.35){
        return;
    }

    const disponiveis =
    Array.from(paises).filter(
        pais =>
        !pais.classList.contains("banido")
    );

    if(disponiveis.length === 0){
        return;
    }

    const pais =
    disponiveis[
        Math.floor(
            Math.random() *
            disponiveis.length
        )
    ];

    pais.classList.add("banido");

}

function abrirFinal(){

    finalSurpresa.style.display =
    "flex";

    mensagemFinal.textContent =
`Seu gato atravessou países, guerras, empresas falidas e até a Lua para chegar até esta mensagem.
🎂 Feliz 18 anos, Sarah!
Você sempre disse que essa idade era importante para você e que esperava muito por ela.
Agora que finalmente chegou nela, espero que consiga realizar todos os seus objetivos.
Que sua vida tenha muito menos caos que a vida deste gato KKK.
Você disse que seus pais não te deixavam ter um gatinho daqueles do IFAL.
Então nada melhor do que criar um gatinho único e desastrado para você.
Um gato que só você pode ter.
Obrigado por ser uma pessoa incrível.
Nunca se esqueça do meu amor por você.

Te amo para sempre.

— Ellie 💜`;

}

abracarGato.addEventListener("click", () => {

    ronrom.textContent =
    "🐱💜 Purrrrrrrrrrr...";

});