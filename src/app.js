const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Importar as dependências e classes necessárias
const ServicoCriarUsuario = require('./modulos/usuario/aplicacao/ServicoCriarUsuario');
const AdaptadorPersistenciaUsuario = require('./modulos/usuario/adaptador/saida/persistencia/AdaptadorPersistenciaUsuario');
const CriarControladorUsuario = require('./modulos/usuario/adaptador/entrada/web/CriarControladorUsuario');

// Middleware para permitir CORS
app.use(cors());

// Middleware para parsing de JSON
app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Endpoint POST /criarUsuario - chamando o contolador
app.post('/criarUsuario', async (req, res) => {
  const adaptadorPersistenciaUsuario = new AdaptadorPersistenciaUsuario();
  const servicoCriarUsuario = new ServicoCriarUsuario(adaptadorPersistenciaUsuario);
  const criarControladorUsuario = new CriarControladorUsuario(servicoCriarUsuario);
  try {
    await criarControladorUsuario.manipulador(req, res);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = app; // Exporta o app para testes
