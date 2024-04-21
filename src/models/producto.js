const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
  descripcion: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  categoria: {
    type: String,
  }
});

const Producto = mongoose.model('Producto', ProductoSchema);

module.exports = Producto;