const itens = require("../../dados/itens.json")

const criar = (req, res) => {
    const dados = req.body

    dados.id = itens.length > 0
        ? Number(itens[itens.length - 1].id) + 1
        : 1

    itens.push(dados)

    res.status(201).json(dados)
}

const listar = (req, res) => {
    res.json(itens)
}

const buscarPorId = (req, res) => {
    const id = Number(req.params.id)

    const item = itens.find(i => Number(i.id) === id)

    if (!item) {
        return res.status(404).json({
            mensagem: "Item não encontrado"
        })
    }

    res.json(item)
}

const atualizar = (req, res) => {
    const id = Number(req.params.id)

    const indice = itens.findIndex(i => Number(i.id) === id)

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Item não encontrado"
        })
    }

    itens[indice] = {
        ...itens[indice],
        ...req.body,
        id: itens[indice].id
    }

    res.json(itens[indice])
}

const deletar = (req, res) => {
    const id = Number(req.params.id)

    const indice = itens.findIndex(i => Number(i.id) === id)

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Item não encontrado"
        })
    }

    const itemRemovido = itens.splice(indice, 1)

    res.json(itemRemovido[0])
}

module.exports = {
    criar,
    listar,
    buscarPorId,
    atualizar,
    deletar
}