const fs = require("fs");

fs.writeFile("./files/arquivo.txt", "Esse é meu primeiro arquivo", function(err) {
    if(err){
        return console.log(`Algo deu errado! ${err}`);
    }
});

fs.readFile("./files/arquivo.txt", "utf8", function(err, data) {
    if(err){
        return console.log(`Algo deu errado! ${err}`);
    }

    console.log(data);
});

fs.rename("./files/arquivo.txt", "./files/arquivo-renomeado.txt", function(err) {
    if(err){
        return console.log(`Algo deu errado! ${err}`);
    }

    console.log("Arquivo renomeado com sucesso!");
});

fs.unlink("./files/arquivo-renomeado.txt", function(err) {
    if(err){
        return console.log(`Algo deu errado! ${err}`);
    }

    console.log("Arquivo excluído com sucesso!");
});