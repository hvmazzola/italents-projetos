const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/contato", (req, res) => {
    res.send("email@email.com.br");
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});