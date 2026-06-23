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

let nomeGato = "Bigodes";

const catastrofes = [

{
evento:"tentou vender o Sol.",
justificativa:"Ele achou que estava muito quente."
},

{
evento:"abriu uma empresa de atum.",
justificativa:"O plano era comer todo o estoque."
},

{
evento:"tentou hackear uma torradeira.",
justificativa:"Pesquisa científica."
},

{
evento:"criou uma religião.",
justificativa:"Ele era o único deus."
},

{
evento:"processou uma cadeira.",
justificativa:"Ela olhou torto para ele."
},

{
evento:"comprou 500 quilos de peixe.",
justificativa:"Parecia promoção."
},

{
evento:"declarou independência do sofá.",
justificativa:"Questões políticas."
},

{
evento:"tentou ensinar peixes a voar.",
justificativa:"Ele acreditava neles."
},

{
evento:"tentou vender a Lua.",
justificativa:"Ninguém estava usando."
},

{
evento:"fundou um país.",
justificativa:"Faltava liderança mundial."
},

{
evento:"tentou cozinhar um chinelo.",
justificativa:"Parecia uma baguete."
},

{
evento:"criou uma escola para pombos.",
justificativa:"Educação é importante."
},

{
evento:"tentou prender um ventilador.",
justificativa:"Movimentação suspeita."
},

{
evento:"abriu um zoológico só de gatos.",
justificativa:"Representatividade."
},

{
evento:"declarou guerra ao aspirador.",
justificativa:"Conflito histórico."
},

{
evento:"comprou um castelo.",
justificativa:"Precisava de espaço."
},

{
evento:"tentou vender o oceano.",
justificativa:"Água demais."
},

{
evento:"criou uma banda de galinhas.",
justificativa:"Talento puro."
},

{
evento:"trocou a internet por sardinhas.",
justificativa:"Parecia um bom negócio."
},

{
evento:"foi eleito prefeito.",
justificativa:"Campanha baseada em ronronados."
},

{
evento:"tentou roubar um banco.",
justificativa:"Queria comprar petiscos."
},

{
evento:"foi banido do Canadá.",
justificativa:"Ninguém entendeu o motivo."
},

{
evento:"comprou um submarino.",
justificativa:"Caçar peixes ficou sério."
},

{
evento:"tentou vender a gravidade.",
justificativa:"Ela ocupa muito espaço."
},

{
evento:"abriu uma pizzaria.",
justificativa:"Todas as pizzas tinham atum."
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

    telaInicial.style.display = "none";

    jogo.style.display = "block";

});

botaoDesastre.addEventListener("click", () => {

    const sorteado =
    catastrofes[
        Math.floor(
            Math.random() *
            catastrofes.length
        )
    ];

    eventoTexto.textContent =
    "Seu gato " + sorteado.evento;

    justificativaTexto.textContent =
    "💭 " + sorteado.justificativa;

    const item =
    document.createElement("li");

    item.textContent =
    "🐾 " +
    nomeGato +
    " " +
    sorteado.evento;

    historico.prepend(item);

    animarGato();

    banirPais();

});

function animarGato(){

    gato.style.transition =
    "0.4s";

    const rotacao =
    (Math.random() * 30) - 15;

    gato.style.transform =
    `translateY(-20px) rotate(${rotacao}deg)`;

    setTimeout(() => {

        gato.style.transform =
        "translateY(0px) rotate(0deg)";

    },400);

}

function banirPais(){

    if(Math.random() > 0.25){
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