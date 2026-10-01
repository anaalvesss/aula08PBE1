const clientes = require("../../dados/clientes.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(clientes[clientes.length - 1].id) + 1 //autoIncrement
    clientes.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    res.json(clientes)
}

const alterar = (req, res) => { 
    const id = req.params.id
    const dados = req.body
    const chaves = Object.keys(dados)
    const cliente = clientes.find((c) => c.id == id)
    
    if(!cliente){
        return res.status(404).json("Id não encontrado")
    }

    chaves.forEach((chave) =>{
        cliente[chave] = dados[chave]
    })
    res.json(cliente)
}   

const excluir = (req, res) => {
    const id = req.params.id
    const indice = clientes.findIndex((c) => c.id == id)

    if(indice == -1){
        return res.status(404).json("Id não encontrado")
    }
    clientes.splice(indice, 1)
    res.json("Cliente excluído com sucesso")
}

module.exports = {
    criar, listar, alterar, excluir
}