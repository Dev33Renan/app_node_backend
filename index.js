const express = require('express');
const Conn = require('./models/conn/conn');
const app = express();
app.use(express.json());


Conn("localhost", 27017,"musicas");

const port = 3000;

const musica = require('./routers/musicas.routers')
app.use('/musicas',musica);

app.listen(process.env.PORT || port, () => {
    console.info('App inicializado');
  })


