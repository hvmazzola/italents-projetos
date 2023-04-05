

const salvarAlimento = document.getElementById('salvar-alimento');
const alimento = document.getElementById('alimento');
const excluirAlimento = document.getElementById('excluir-alimento');


salvarAlimento.addEventListener("click", () => {

    let nome = document.getElementById('nome').value;
    let unPorcao = document.getElementById('un-porcao').value;
    let qntPorcao = document.getElementById('qnt-porcao').value;
    let porcaoConsumida = document.getElementById('porcao-consumida').value;

    if((nome == '') | (unPorcao == '') | (qntPorcao == '') | (porcaoConsumida == '')) {
        alert('* Preencha todos os campos obrigatórios.')
    } else {

        const aviso = document.createElement('div');       
        aviso.setAttribute("class", "salvamentos");
        
        aviso.innerHTML = `
        <p>ALIMENTO SALVO COM SUCESSO!</p>
        `;

        alimento.appendChild(aviso);

        setTimeout(() => {
        aviso.remove()
        window.location.href = './index.html';
        }, 1800);
    }
})

excluirAlimento.addEventListener("click", () => {

    const aviso = document.createElement('div');       
    aviso.setAttribute("class", "salvamentos");
    
    aviso.innerHTML = `
    <p>ALIMENTO EXCLUÍDO COM SUCESSO!</p>
    `;

    alimento.appendChild(aviso);

    setTimeout(() => {
       aviso.remove()
       window.location.href = './index.html';
    }, 1800);
})

var myName = 'Mazzolinha';

// teste de localStorage
localStorage.setItem("name", myName);