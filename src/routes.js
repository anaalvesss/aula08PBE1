const express = require("express")
const router = express.Router()

const Cliente = require("./controllers/cliente")
const Pedido = require("./controllers/pedido")

const rotaInicial = (req, res) => {
    res.json("Servidor respondendo")
}

router.get('/', rotaInicial)
router.get('/clientes', Cliente.listar)
router.get('/pedidos', Pedido.listar)
router.post('/clientes', Cliente.criar)
router.post('/pedidos', Pedido.criar)
router.delete('/pedido/:id', Pedido.excluir)
router.put('/clientes/:id', Cliente.alterar)
router.delete('/clientes/:id', Cliente.excluir)
router.get('./produtos', Produto.listar)
router.post('./produtos', Produto.criar)
router.delete('./produtos', Produto.excluir)
router.put('./produtos', Produto.alterar)
router.get('./itens', Item.listar)
router.post('./itens', Item.criar)
router.delete('./itens', Item.excluir)
router.put('itens', Item.alterar)

module.exports = router