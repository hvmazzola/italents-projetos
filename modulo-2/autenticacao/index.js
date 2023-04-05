const express = require("express");
const connectToDatabase = require("./database/database");
const authService = require("./service/auth.service");
const app = express();

connectToDatabase();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    console.log(tokenGenerator());
    res.send("Hello World");
})

app.post("/login", async (req, res) => {
    try {
        const { email, senha } = req.body;
        const user = await authService.loginService(email);

        if((!user) || (senha != user.senha)){
            return res.status(400).send({ message: "E-mail ou senha inválida, tente novamente."});
        }

        user.token = tokenGenerator();
        await authService.updateToken(user);

        return res.send(user);

    } catch(err) {
        console.log(`erro: ${err}`);
    }
})

app.post("/validar", async (req, res) => {
    try {
        const { email, token } = req.body;

        const user = await authService.loginService(email);

        if((!user) || (token != user.token)){
            return res.status(400).send({ message: "Token inválido ou expirado, tente novamente."});
        }

        user.token = "";
        await authService.updateToken(user);

        return res.send(user);

    } catch(err) {
        console.log(`erro: ${err}`);
    }
})

const tokenGenerator = function() {
    let token = Math.random().toString(36).substring(2);
    return token;
}

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})
