

const salvarAlimento = document.getElementById('salvar-alimento');
const alimento = document.getElementById('alimento');


salvarAlimento.addEventListener("click", () => {
    
    const aviso = document.createElement('div');
    
    aviso.setAttribute("class", "salvamentos");
    
    aviso.innerHTML = `
    <p>ALIMENTO SALVO COM SUCESSO!</p>
`

    alimento.appendChild(aviso);

    //setTimeout(homeMain.removeChild(aviso), 2000);
})