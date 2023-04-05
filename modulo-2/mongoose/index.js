const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/mongo", (req, res) => {
    mongoose.connect('mongodb://127.0.0.1:27017/teste-gatos');

    const gatoSchema = {
        "nome": String,
        "idade": Number,
        "sexo": String,
        "porte": String,
        "peso": Number,
        "docil": Boolean
    }

    const Cat = mongoose.model('Gato', gatoSchema);

    const gato = {
        nome: "Sushi",
        idade: 4,
        sexo: "M",
        porte: "Pequeno",
        peso: 4.3,
        docil: true
    }

    const kitty = new Cat(gato);

    kitty.save().then(() => console.log("Gatinho salvo :)"));

    res.send("Gatinho salvo com sucesso!");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});