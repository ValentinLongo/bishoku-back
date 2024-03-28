const express = require('express');
const {
  crearProducto,
  obtenerProductos,
  actualizarProducto,
  eliminarProducto
} = require('../services/producto.service');

const {
  crearPedido,
  obtenerPedidos,
  actualizarPedido,
  eliminarPedido
} = require('../services/pedido.service');

const router = express.Router();

// Rutas para Productos
router.post('/productos', crearProducto);
router.get('/productos', obtenerProductos);
router.put('/productos/:id', actualizarProducto);
router.delete('/productos/:id', eliminarProducto);

// Rutas para Pedidos
router.post('/pedidos', crearPedido);
router.get('/pedidos', obtenerPedidos);
router.put('/pedidos/:id', actualizarPedido);
router.delete('/pedidos/:id', eliminarPedido);

module.exports = router;