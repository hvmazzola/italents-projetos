

const salvarLogin = document.getElementById('salvar-login');
const login = document.getElementById('login-main');


salvarLogin.addEventListener("click", () => {

    const aviso = document.createElement('div');       
    aviso.setAttribute("class", "salvamentos");
    
    aviso.innerHTML = `
    <p>DADOS CORRETOS! FAZENDO LOGIN...</p>
    `;

    login.appendChild(aviso);

    setTimeout(() => {
       aviso.remove()
       window.location.href = './home.html';
    }, 1800);
})