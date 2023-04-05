

const salvarLogin = document.getElementById('salvar-login');
const loginAlert = document.getElementById('login-main');


salvarLogin.addEventListener("click", () => {

    let login = document.getElementById('input-login').value;
    let senha = document.getElementById('input-senha').value;

    if((login == '') | (senha == '')) {
        alert('Login ou Senha estão vazios.')
    } else {
        const aviso = document.createElement('div');       
        aviso.setAttribute("class", "salvamentos");
        
        aviso.innerHTML = `
        <p>DADOS CORRETOS! FAZENDO LOGIN...</p>
        `;

        loginAlert.appendChild(aviso);

        setTimeout(() => {
        aviso.remove()
        window.location.href = './index.html';
        }, 1800);
    }
})