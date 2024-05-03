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

const {
  crearMesa,
  agregarProductoMesa,
  cerrarMesa,
  obtenerPrecioTotalPorMesa,
  obtenerMesasActivas
} = require('../services/mesa.service');

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

// Rutas para Mesas
router.get('/mesas', obtenerMesasActivas);
router.post('/mesas', crearMesa);
router.put('/mesas/:id', agregarProductoMesa);
router.put('/mesas/cerrarMesa/:id', cerrarMesa);
router.get('/mesas/:id', obtenerPrecioTotalPorMesa);

module.exports = router;