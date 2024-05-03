const Pedido = require("../models/pedido");

exports.crearPedido = async (req, res) => {
  try {
    const { nombre, direccion, ubicacion, productosSeleccionados, precioTotal } = req.body;
    const nuevoPedido = new Pedido({ nombre, direccion, ubicacion, productosSeleccionados, precioTotal });
    await nuevoPedido.save();
    res.status(201).json(nuevoPedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarPedido = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, direccion, ubicacion, productosSeleccionados, precioTotal } = req.body;
    const pedidoActualizado = await Pedido.findByIdAndUpdate(
      id,
      { nombre, direccion, ubicacion, productosSeleccionados, precioTotal },
      { new: true }
    );
    if (!pedidoActualizado) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }
    res.status(200).json(pedidoActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.eliminarPedido = async (req, res) => {
  try {
    const { id } = req.params;
    const pedidoEliminado = await Pedido.findByIdAndDelete(id);
    if (!pedidoEliminado) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }
    res.status(200).json({ mensaje: 'Pedido eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};