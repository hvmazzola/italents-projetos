

const salvarAlimento = document.getElementById('salvar-alimento');
const alimento = document.getElementById('alimento');
const excluirAlimento = document.getElementById('excluir-alimento');


salvarAlimento.addEventListener("click", () => {

    const aviso = document.createElement('div');       
    aviso.setAttribute("class", "salvamentos");
    
    aviso.innerHTML = `
    <p>ALIMENTO SALVO COM SUCESSO!</p>
    `;

    alimento.appendChild(aviso);

    setTimeout(() => {
       aviso.remove()
       window.location.href = './home.html';
    }, 1800);
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
       window.location.href = './home.html';
    }, 1800);
})