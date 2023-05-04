import "./Welcome.css";

function Welcome({ nome, sobrenome }) {
    return(
        <h1> Olá {nome} {sobrenome}, seja bem vindo!</h1>
    )
};

export default Welcome;