const express = require("express");
const connectToDatabase = require("./database/database");
const authService = require("./service/auth.service");
const app = express();
const jwt = require("jsonwebtoken");

connectToDatabase();

const port = 3000;
const segredo = "633f3d0a5f9d77fd83e93703";

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/login", async (req, res) => {
    try {
        const { email, senha } = req.body;
        const user = await authService.loginService(email);

        if((!user) || (senha != user.senha)){
            return res.status(400).send({ message: "E-mail ou senha inválida, tente novamente."});
        }

        const token = authService.generateToken(user, segredo);

        return res.send({
            user,
            token
        });

    } catch(err) {
        console.log(`erro: ${err}`);
    }
})

app.get("/validacao-token", async (req, res) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).send({ message: "O token não foi informado."});
        }

        const parts = authHeader.split(" ");

        if (parts.length !== 2) {
            return res.status(401).send({ message: "Token inválido."});
        }

        const [scheme, token] = parts;

        if (!/^Bearer$/i.test(scheme)) {
            return res.status(401).send({ message: "Token formatado incorretamente."});
        }

        jwt.verify(token, segredo, async (err, decoded) => {
            if (err) {
                console.log(`Erro: ${err}`);
                return res.status(500).send ( {message: `Erro interno. Tente novamente.`});
            }
            res.send(decoded);
        });
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
