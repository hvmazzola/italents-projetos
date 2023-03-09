

const salvarPerfil = document.getElementById('salvar-perfil');
const perfil = document.getElementById('perfil');

salvarPerfil.addEventListener("click", () => {

    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let objetivo = document.getElementById('objetivo').value;
    let nivelTreino = document.getElementById('nivel-treino').value;

    if((nome == '') | (altura == '') | (objetivo == '') | (nivelTreino == '')) {
        alert('* Preencha todos os campos obrigatórios.')
    } else {
        const aviso = document.createElement('div');       
        aviso.setAttribute("class", "salvamentos");
        
        aviso.innerHTML = `
        <p>PERFIL SALVO COM SUCESSO!</p>
        `;

        perfil.appendChild(aviso);

        setTimeout(() => {
        aviso.remove()
        window.location.href = './index.html';
        }, 1800);
    }
})