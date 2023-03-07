

const salvarRefeicao = document.getElementById('salvar-refeicao');
const refeicao = document.getElementById('refeicao');
const excluirRefeicao = document.getElementById('excluir-refeicao');


salvarRefeicao.addEventListener("click", () => {

    const aviso = document.createElement('div');       
    aviso.setAttribute("class", "salvamentos");
    
    aviso.innerHTML = `
    <p>REFEIÇÃO SALVA COM SUCESSO!</p>
    `;

    refeicao.appendChild(aviso);

    setTimeout(() => {
       aviso.remove()
       window.location.href = './home.html';
    }, 1800);
})

excluirRefeicao.addEventListener("click", () => {

    const aviso = document.createElement('div');       
    aviso.setAttribute("class", "salvamentos");
    
    aviso.innerHTML = `
    <p>REFEIÇÃO EXCLUÍDA COM SUCESSO!</p>
    `;

    refeicao.appendChild(aviso);

    setTimeout(() => {
       aviso.remove()
       window.location.href = './home.html';
    }, 1800);
})