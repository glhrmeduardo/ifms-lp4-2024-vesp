const express = require('express');

const rotas = express.Router();


// GET
// rota para acessar o método GET para professores
rotas.get('/', (req, res) => {
  res.send('Você acessou a rota professor.')
})


// POST
// rota para acessar o método POST para professores
rotas.post('/cadastro', (req, res) => {
  res.send('Você está na rota para o cadastro de um novo professor.');
  // implementação para cadastrar um novo estudante
});


// PUT
// rota para acessar o método PUT para professores
rotas.put('/atualizacao', (req, res) => {
  res.send('Você está na rota para a atualização dos dados de um professor.');
});


// DELETE
// rota para acessar o método DELETE para professores
rotas.delete('/deletar', (req, res) => {
  res.send('Você está na rota para deleter os dados de um professor');
})

module.exports = rotas;