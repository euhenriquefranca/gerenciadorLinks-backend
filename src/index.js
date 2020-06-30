// servidor
const express = require('express');

const app = express();

// req - referente a todas informações da nossa requisição e response traz métodos para efetuar a respota ao browser.
app.get('/', (req, res) => {
  return res.json('Api running...');
})

app.listen(3001, () => {
  console.log('Listening on port 3001');
});