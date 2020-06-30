// servidor
const express = require('express');
const db = require('./models');

const authController = require('./controllers/auth');

const app = express();


// /auth/sign-in
// /auth/sign-up
app.use('/auth', authController);

// req - referente a todas informações da nossa requisição e response traz métodos para efetuar a respota ao browser.
app.get('/', (req, res) => {
  return res.json('Api running...');
})

// vai sincronizar o sequelize antes de inicializar o servidor
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Listening on port 3001');
  });
});