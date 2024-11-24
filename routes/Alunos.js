const express = require('express');

const rotas = express.Router();


// GET
// rota para acessar o método GET para alunos
rotas.get('/', (req, res) => {
  res.send('Você acessou a rota aluno.')
})


// POST
// rota para acessar o método POST para alunos
rotas.post('/cadastro', (req, res) => {
  res.send('Você está na rota para o cadastro de um novo aluno.');
});


// PUT
// rota para acessar o método PUT para alunos
rotas.put('/atualizacao', (req, res) => {
  res.send('Você está na rota para a atualização dos dados de um aluno.');
});


// DELETE
// rota para acessar o método de DELETE para alunos
rotas.delete('/deletar', (req, res) => {
    res.send('Você está na rota para deleter os dados de um aluno');
  })
  

// exportar toda a configuração das rotas
module.exports = rotas;