const mongoose = require('mongoose');

const SubProductoSchema = mongoose.Schema({
  producto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producto'
  },
  descripcion: {
    type: String
  },
  precio: {
    type: Number
  },
  categoria: {
    type: String
  }
});

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
        producto: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Producto'
        },
        descripcion: String,
        precio: Number,
        subproductos: [SubProductoSchema] 
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