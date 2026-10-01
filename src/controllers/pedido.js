const pedidos = require("../../dados/pedidos.json")

function calcTotais() {
    pedidos.forEach(p => {
        p.total = p.quantidade * p.preco
    })
}

const criar = (req, res) => {
    const dados = req.body

    const novoId = pedidos.length > 0
        ? Number(pedidos[pedidos.length - 1].id) + 1
        : 1

    dados.id = novoId
    dados.total = dados.quantidade * dados.preco

    pedidos.push(dados)

    res.status(201).json(dados)
}

const listar = (req, res) => {
    calcTotais()

    res.json(pedidos)
}

const alterar = (req, res) => {
    const id = Number(req.params.id)
    const indice = pedidos.findIndex(p => Number(p.id) === id)

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Pedido não encontrado"
        })
    }

    pedidos[indice] = {
        ...pedidos[indice],
        ...req.body,
        id: pedidos[indice].id
    }

    pedidos[indice].total =
        pedidos[indice].quantidade * pedidos[indice].preco

    res.json(pedidos[indice])
}

const excluir = (req, res) => {
    const id = Number(req.params.id)
    const indice = pedidos.findIndex(p => Number(p.id) === id)

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Pedido não encontrado"
        })
    }

    const pedidoExcluido = pedidos.splice(indice, 1)

    res.json(pedidoExcluido[0])
}

module.exports = {
    criar,
    listar,
    alterar,
    excluir
}