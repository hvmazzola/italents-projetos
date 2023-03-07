

const salvarRefeicao = document.getElementById('salvar-exercicio');
const exercicio = document.getElementById('exercicio');


salvarRefeicao.addEventListener("click", () => {

    const aviso = document.createElement('div');       
    aviso.setAttribute("class", "salvamentos");
    
    aviso.innerHTML = `
    <p>EXERCÍCIO SALVO COM SUCESSO!</p>
    `;

    exercicio.appendChild(aviso);

    setTimeout(() => {
       aviso.remove()
       window.location.href = './home.html';
    }, 1800);
})