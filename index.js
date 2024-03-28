const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productoRoutes = require('./src/routes/routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL, {
  // Remueve useNewUrlParser y useUnifiedTopology, ya que son obsoletas
  // Mantén useUnifiedTopology para compatibilidad, aunque no es necesario
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

app.use(express.json());
app.use('/api', productoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});