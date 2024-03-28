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
  ubicacion: {
    type: [String],
    required: false
  },
  productosSeleccionados: {
    type: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Producto'
        },
        descripcion: String,
        precio: Number
      }
    ],
    required: false
  },
  precioTotal: {
    type: Number,
    required: false
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Pedido = mongoose.model('Pedido', PedidoSchema);

module.exports = Pedido;