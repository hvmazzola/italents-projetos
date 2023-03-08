var listaRefeicoesEstendidas = []
var listaRefeicoes = []

const cafeManha = document.getElementById('cafe-manha')
const almoco = document.getElementById('almoco')
const lancheTarde = document.getElementById('lanche-tarde')
const preTreino = document.getElementById('pre-treino')
const janta = document.getElementById('janta')
const ceia = document.getElementById('ceia')

listaRefeicoes = [cafeManha, almoco, lancheTarde, preTreino, janta, ceia];

var cafeManhaEstendido = document.createElement('div')
cafeManhaEstendido.innerHTML = `
<div id="alimentos-cafe-manha" class="alimentos">
    <div class="alimento">
        <span>Ovo mexido</span>
        <span>200g</span>
        <span>296.00 kcal</span>
        <span class="carb-text">C: 2.40</span> 
        <span class="prot-text">P: 25.20</span>
        <span class="fat-text">F: 20.00</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
    <div class="alimento">
        <span>Maçã fuji</span>
        <span>140g</span>
        <span>77.70 kcal</span>
        <span class="carb-text">C: 21.28</span>
        <span class="prot-text">P: 0.42</span>
        <span class="fat-text">F: 0.00</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
    <div class="alimento">
        <span>Mamão papaia</span>
        <span>200g</span>
        <span>80.00 kcal</span>
        <span class="carb-text">C: 20.80</span>
        <span class="prot-text">P: 1.00</span>
        <span class="fat-text">F: 0.20</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
</div>
`;

var almocoEstendido = document.createElement('div')
almocoEstendido.innerHTML = `
<div id="alimentos-almoco" class="alimentos">
    <div class="alimento">
        <span>Peito de frango grelhado</span>
        <span>160g</span>
        <span>296.00 kcal</span>
        <span class="carb-text">C: 0.00</span> 
        <span class="prot-text">P: 51.20</span>
        <span class="fat-text">F: 3.20</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
    <div class="alimento">
        <span>Batata-doce</span>
        <span>40g</span>
        <span>37.40 kcal</span>
        <span class="carb-text">C: 7.08</span>
        <span class="prot-text">P: 0.56</span>
        <span class="fat-text">F: 0.76</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
    <div class="alimento">
        <span>Salada de legumes</span>
        <span>120g</span>
        <span>42.48 kcal</span>
        <span class="carb-text">C: 8.52</span>
        <span class="prot-text">P: 2.40</span>
        <span class="fat-text">F: 0.36</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
    <div class="alimento">
        <span>Semente de girassol</span>
        <span>15g</span>
        <span>98.41 kcal</span>
        <span class="carb-text">C: 2.90</span>
        <span class="prot-text">P: 3.80</span>
        <span class="fat-text">F: 8.26</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
</div>
`;

var lancheTardeEstendido = document.createElement('div')
lancheTardeEstendido.innerHTML = `
<div id="alimentos-lanche-tarde" class="alimentos">
    <div class="alimento">
        <span>Farinha de tapioca</span>
        <span>20g</span>
        <span>45.34 kcal</span>
        <span class="carb-text">C: 11.34</span> 
        <span class="prot-text">P: 0.00</span>
        <span class="fat-text">F: 0.00</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
    <div class="alimento">
        <span>Semente de chia</span>
        <span>10g</span>
        <span>51.33 kcal</span>
        <span class="carb-text">C: 3.33</span>
        <span class="prot-text">P: 2.00</span>
        <span class="fat-text">F: 3.33</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
    <div class="alimento">
        <span>Ovo mexido</span>
        <span>100g</span>
        <span>157.41.00 kcal</span>
        <span class="carb-text">C: 1.76</span> 
        <span class="prot-text">P: 14.30</span>
        <span class="fat-text">F: 8.80</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
    <div class="alimento">
        <span>Atum ralado</span>
        <span>60g</span>
        <span>57.38 kcal</span>
        <span class="carb-text">C: 0.90</span>
        <span class="prot-text">P: 12.30</span>
        <span class="fat-text">F: 0.77</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
</div>
`;

var preTreinoEstendido = document.createElement('div')
preTreinoEstendido.innerHTML = `
<div id="alimentos-pre-treino" class="alimentos">
    <div class="alimento">
        <span>Pasta de amendoim</span>
        <span>15g</span>
        <span>92.00 kcal</span>
        <span class="carb-text">C: 1.40</span> 
        <span class="prot-text">P: 4.50</span>
        <span class="fat-text">F: 7.61</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
    <div class="alimento">
        <span>Batata-doce</span>
        <span>40g</span>
        <span>37.40 kcal</span>
        <span class="carb-text">C: 7.08</span>
        <span class="prot-text">P: 0.56</span>
        <span class="fat-text">F: 0.76</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
    <div class="alimento">
        <span>Whey protein</span>
        <span>30g</span>
        <span>116.04 kcal</span>
        <span class="carb-text">C: 5.01</span> 
        <span class="prot-text">P: 24.00</span>
        <span class="fat-text">F: 0.00</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
</div>
`;

var jantarEstendido = document.createElement('div')
jantarEstendido.innerHTML = `
<div id="alimentos-janta" class="alimentos">
    <div class="alimento">
        <span>Peito de frango grelhado</span>
        <span>160g</span>
        <span>296.00 kcal</span>
        <span class="carb-text">C: 0.00</span> 
        <span class="prot-text">P: 51.20</span>
        <span class="fat-text">F: 3.20</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
    <div class="alimento">
        <span>Batata-doce</span>
        <span>40g</span>
        <span>37.40 kcal</span>
        <span class="carb-text">C: 7.08</span>
        <span class="prot-text">P: 0.56</span>
        <span class="fat-text">F: 0.76</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
    <div class="alimento">
        <span>Salada de legumes</span>
        <span>120g</span>
        <span>42.48 kcal</span>
        <span class="carb-text">C: 8.52</span>
        <span class="prot-text">P: 2.40</span>
        <span class="fat-text">F: 0.36</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
    <div class="alimento">
        <span>Semente de girassol</span>
        <span>15g</span>
        <span>98.41 kcal</span>
        <span class="carb-text">C: 2.90</span>
        <span class="prot-text">P: 3.80</span>
        <span class="fat-text">F: 8.26</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
</div>
`;

var ceiaEstendida = document.createElement('div')
ceiaEstendida.innerHTML = `
<div id="alimentos-ceia" class="alimentos">
    <div class="alimento">
        <span>Maracujá</span>
        <span>50g</span>
        <span>34.20 kcal</span>
        <span class="carb-text">C: 6.15</span> 
        <span class="prot-text">P: 1.00</span>
        <span class="fat-text">F: 1.05</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
    <div class="alimento">
        <span>Pasta de amendoim</span>
        <span>15g</span>
        <span>92.00 kcal</span>
        <span class="carb-text">C: 1.40</span> 
        <span class="prot-text">P: 4.50</span>
        <span class="fat-text">F: 7.61</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
    <div class="alimento">
        <span>Whey protein</span>
        <span>30g</span>
        <span>116.04 kcal</span>
        <span class="carb-text">C: 5.01</span> 
        <span class="prot-text">P: 24.00</span>
        <span class="fat-text">F: 0.00</span>
        <a href="./adicionar_alimento.html"><i class="bi bi-pencil-fill"></i></a>
    </div>
</div>
`;

listaRefeicoesEstendidas.push(cafeManhaEstendido)
listaRefeicoesEstendidas.push(almocoEstendido)
listaRefeicoesEstendidas.push(lancheTardeEstendido)
listaRefeicoesEstendidas.push(preTreinoEstendido)
listaRefeicoesEstendidas.push(jantarEstendido)
listaRefeicoesEstendidas.push(ceiaEstendida)

function estenderRefeicao(idRefeicao) {
    for (i=0; i < listaRefeicoes.length; i++) {
        if ((listaRefeicoes[i].id) == idRefeicao) {
            listaRefeicoes[i].insertAdjacentHTML("afterend", listaRefeicoesEstendidas[i].innerHTML);
            const botaoEstensao = listaRefeicoes[i].querySelector(".botao-estender");
            botaoEstensao.innerHTML = `
            <button type="button" class="down" onClick="retrairRefeicao('${listaRefeicoes[i].id}')"><i class="bi bi-caret-up-fill"></i></i></button>
            `;
        }
    }
}

function retrairRefeicao(idRefeicao) {
    for (i=0; i < listaRefeicoes.length; i++) {
        if ((listaRefeicoes[i].id) == idRefeicao) {
            const esconderAlimentos = document.querySelector("#alimentos-"+listaRefeicoes[i].id);
            esconderAlimentos.remove();
            const botaoEstensao = listaRefeicoes[i].querySelector(".botao-estender");
            botaoEstensao.innerHTML = `
            <button type="button" class="down" onClick="estenderRefeicao('${listaRefeicoes[i].id}')"><i class="bi bi-caret-down-fill"></i></i></button>
            `;
        }
    }
}

const limparExercicios = document.getElementById('edit-ex')

limparExercicios.addEventListener("click", () => {

    const exercicios = document.getElementById('exercicios');
    exercicios.innerHTML = `
    <span>Exercícios</span>
    <span>Calorias Queimadas: 0 kcal</span>
    <div id="botoes-ex">
        <button id="add-ex"><a href="./adicionar_exercicio.html">Adicionar exercício</a></button>
        <button id="edit-ex" type="button">Limpar exercícios</button>
    </div>
    `
})


let qntAgua = 0;
const divQntAgua = document.getElementById('qnt-agua');
const addAgua = document.getElementById('button-add-agua');
const limparAgua = document.getElementById('button-limpar-agua');
const progressAgua = document.getElementById('progress-agua');

divQntAgua.innerHTML = `${qntAgua}ml / 2000ml`

addAgua.addEventListener("click", () => {

    let aguaAdicionada = parseInt(prompt('Digite o quanto você bebeu de água:'));
    qntAgua = qntAgua+aguaAdicionada
    divQntAgua.innerHTML = `${qntAgua}ml / 2000ml`
    progressAgua.value = qntAgua;

})

limparAgua.addEventListener("click", () => {

    qntAgua = 0;
    divQntAgua.innerHTML = `${qntAgua}ml / 2000ml`
    progressAgua.value = qntAgua;

})


function addRefeicao(idBotao) {

    const botaoAdd = document.getElementById(idBotao);


    botaoAdd.insertAdjacentHTML("afterend", `
    <div class="refeicao">
        <div class="food-info" id="nova-refeicao-${listaRefeicoes.length+1}">
            <span>Refeição ${listaRefeicoes.length+1}</span>
            <span>00:00</span>
            <span>0.00 kcal</span>
            <span class="carb-text">Carb: 0.00</span>
            <span class="prot-text">Prot: 0.00</span>
            <span class="fat-text">Fat: 0.00</span>
            <div class="botao-estender">
                <button type="button" class="down" onClick="estenderRefeicao('nova-refeicao-${listaRefeicoes.length+1}')"><i class="bi bi-caret-down-fill"></i></i></button>
            </div>
        </div>
        <div class="botoes-refeicao">
            <button class="add-alimento"><a href="./adicionar_alimento.html">Adicionar alimento</a></button>
            <button class="edit-refeicao"><a href="./adicionar_refeicao.html">Editar refeição</a></button>
        </div>
    </div>

    <button class="add-refeicao" type="button" id="refeicao-${listaRefeicoes.length+1}" onClick="addRefeicao('refeicao-${listaRefeicoes.length+1}')"><i class="bi bi-plus-circle"></i>Adicionar nova refeição</button>
    `)

    var refeicaoNova = document.getElementById('nova-refeicao'+listaRefeicoes.length+1)
    listaRefeicoes.push(refeicaoNova)
}

getAdvice()

async function getAdvice(){
    let resposta = await fetch("https://api.adviceslip.com/advice");

    const data = await resposta.json();

document.getElementById('advice').innerHTML = `
"${data.slip.advice}"
`;
}

// teste de localStorage
console.log(localStorage.getItem("name"));