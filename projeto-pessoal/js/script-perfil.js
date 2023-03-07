

const salvarPerfil = document.getElementById('salvar-perfil');
const perfil = document.getElementById('perfil');


salvarPerfil.addEventListener("click", () => {

    const aviso = document.createElement('div');       
    aviso.setAttribute("class", "salvamentos");
    
    aviso.innerHTML = `
    <p>PERFIL SALVO COM SUCESSO!</p>
    `;

    perfil.appendChild(aviso);

    setTimeout(() => {
       aviso.remove()
       window.location.href = './home.html';
    }, 1800);
})