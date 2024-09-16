# Chatgpt:

como inciar um projeto usando express cors em javascript e jest

## resposta

## Passo 1: Inicializar o projeto

npm init -y

## Passo 2:

Instalar as dependências
npm install express cors
npm install --save-dev jest supertest

## Passo 3: Configure o Jest no seu package.json

{
"scripts": {
"start": "node src/app.js",
"test": "jest"
}
}

## Passo 5: Criar o servidor Express com CORS

mkdir src
touch src/app.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware para permitir CORS
app.use(cors());

// Middleware para parsing de JSON
app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
res.send('Hello World!');
});

app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = app; // Exporta o app para testes

## Passo 7: Criar testes com Jest e Supertest

mkdir tests
touch tests/app.test.js
const request = require('supertest');
const app = require('./index'); // Importa o app Express

describe('GET /', () => {
it('responds with Hello World!', async () => {
const response = await request(app).get('/');
expect(response.statusCode).toBe(200);
expect(response.text).toBe('Hello World!');
});
});

## Passo 8: Rodar o projeto e o test

npm start
npm test
