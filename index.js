const express = require("express");
const app = express();

app.set('view engine', 'ejs')

app.get("/", (req, res) => { 
    var nome = "Pedro";
    var lang = "javascript";
    var exibirMsg = true;
    res.render("index", {
        nome: nome,
        lang: lang,
        alunos: 40,
        msg : exibirMsg
    }); // Reenderiza a pagina html (views/index.ejs)
});

app.listen(3000, () => {
    console.log("Projetin rodando");
});