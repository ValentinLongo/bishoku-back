const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Importa el paquete cors
const productoRoutes = require('./src/routes/routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

app.use(express.json());
app.use(cors()); // Usa el middleware cors para permitir solicitudes desde otros dominios
app.use('/api', productoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
