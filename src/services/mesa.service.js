const Mesa = require('../models/mesa');

exports.crearMesa = async (req, res) => {
    try {
      const { ubicacion, productosSeleccionados } = req.body;
      const estado = true;
      const nuevaMesa = new Mesa({ ubicacion, estado, productosSeleccionados });
      await nuevaMesa.save();
      res.status(201).json(nuevaMesa);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.agregarProductoMesa = async (req, res) => {
    try {
      
      const { id } = req.params;
      const { productosSeleccionados } = req.body;
      const mesaActualizada = await Mesa.findByIdAndUpdate(
        id,
        { $push: { productosSeleccionados: { $each: productosSeleccionados } } },
        { new: true }
      );
      if (!mesaActualizada) {
        return res.status(404).json({ error: 'Mesa no encontrada' });
      }
      res.status(200).json(mesaActualizada);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.cerrarMesa = async (req, res) => {
    try {
      const { id } = req.params;
      const estado = false;
      const mesaCerrada = await Mesa.findByIdAndUpdate(
        id,
        { estado }
      );
      if (!mesaCerrada) {
        return res.status(404).json({ error: 'Mesa no encontrada' });
      }
      res.status(200).json(mesaCerrada);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.obtenerPrecioTotalPorMesa = async (req, res) => {
    try {
        const { id } = req.params;
        const mesa = await Mesa.findById(id);

        if (!mesa) {
            return res.status(404).json({ error: 'Mesa no encontrada' });
        }

        let precioTotal = 0;
        mesa.productosSeleccionados.forEach(producto => {
            precioTotal += producto.precio;
        });

        res.status(200).json({ precioTotal });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obtenerMesasActivas = async (req, res) => {
  try {
      const mesasActivas = await Mesa.find({ estado: true });
      res.status(200).json(mesasActivas);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};