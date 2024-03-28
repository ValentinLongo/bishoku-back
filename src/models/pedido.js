const mongoose = require('mongoose');

const PedidoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: false
  },
  direccion: {
    type: String,
    required: false
  },
  ubicaciones: {
    type: [String],
    required: false
  },
  productosSeleccionados: {
    type: [{
      _id: mongoose.Schema.Types.ObjectId,
      descripcion: String,
      precio: Number
    }],
    required: false
  },
  precioTotal: {
    type: Number,
    required: false
  }
});

const Pedido = mongoose.model('Pedido', PedidoSchema);

module.exports = Pedido;