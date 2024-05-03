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

const MesaSchema = mongoose.Schema({
  ubicacion: {
    type: [String],
    required: false
  },
  estado: {
    type: Boolean
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

const Mesa = mongoose.model('Mesa', MesaSchema);

module.exports = Mesa;