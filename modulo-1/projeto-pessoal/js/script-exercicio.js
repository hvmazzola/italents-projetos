

const salvarRefeicao = document.getElementById('salvar-exercicio');
const exercicio = document.getElementById('exercicio');


salvarRefeicao.addEventListener("click", () => {

    let nome = document.getElementById('nome').value;
    let tempo = document.getElementById('tempo').value;
    let nivelEx = document.getElementById('nivel-ex').value;

    if((nome == '') | (tempo == '') | (nivelEx == '')) {
        alert('* Preencha todos os campos obrigatórios.')
    } else {

        const aviso = document.createElement('div');       
        aviso.setAttribute("class", "salvamentos");
        
        aviso.innerHTML = `
        <p>EXERCÍCIO SALVO COM SUCESSO!</p>
        `;

        exercicio.appendChild(aviso);

        setTimeout(() => {
        aviso.remove()
        window.location.href = './index.html';
        }, 1800);
    }
})