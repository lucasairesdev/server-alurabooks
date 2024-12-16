const fs = require("fs")

function getTodosLivros (){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId (id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter( livro => livro.id === id )[0]
    return livroFiltrado

}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListaLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAutais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAutais.findIndex(livro => livro.id === id)

    const conteudoAlterado = { ...livrosAutais[indiceModificado], ...modificacoes }

    livrosAutais[indiceModificado] = conteudoAlterado;

    fs.writeFileSync("livros.json", JSON.stringify(livrosAutais))
;}

function deletaLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livrosFiltrados = livros.filter( livro => livro.id!== id )
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivroPorId
}