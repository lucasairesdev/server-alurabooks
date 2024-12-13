//import do express
const express = require("express");
//Rota
const rotaLivro = require("./rotas/livro")

//aplicação express
const app = express();

//definição da porta
const port = 8000;

app.use('/livros', rotaLivro)




//Mandando a aplicação ouvir uma porta específica
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})