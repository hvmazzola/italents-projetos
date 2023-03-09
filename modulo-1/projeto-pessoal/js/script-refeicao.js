

const salvarRefeicao = document.getElementById('salvar-refeicao');
const refeicao = document.getElementById('refeicao');
const excluirRefeicao = document.getElementById('excluir-refeicao');


salvarRefeicao.addEventListener("click", () => {

    let nome = document.getElementById('nome').value;
    let horario = document.getElementById('horario').value;

    if((nome == '') | (horario == '')) {
        alert('* Preencha todos os campos obrigatórios.')
    } else {

        const aviso = document.createElement('div');       
        aviso.setAttribute("class", "salvamentos");
        
        aviso.innerHTML = `
        <p>REFEIÇÃO SALVA COM SUCESSO!</p>
        `;

        refeicao.appendChild(aviso);

        setTimeout(() => {
        aviso.remove()
        window.location.href = './index.html';
        }, 1800);
    }
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
       window.location.href = './index.html';
    }, 1800);
})