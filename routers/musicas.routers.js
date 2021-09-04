const express = require('express');
const router = express.Router();
const Musica = require('../models/musicas');


router.get('/',( req, res) => {
    
    Musica.find({})
    .then((musica) => {
        res.send(musica)
    })
    .catch((err) => {
        console.log(err)

    })    
});

router.post('/add', async(req, res) => {
    await Musica.create(req.body).then(() => {
        res.status(200).send("Musica adicionada com sucesso");
    }).catch((err) => {
        res.status(400).send("Algo deu errado tente novamente");
    });    
});

router.put("/update/:nome", async (req, res) => {
    await Musica.updateOne({nome: req.params.nome},req.body)
    .then(() => {
        res.status(200).send("Atualizado com sucesso");
    })
    .catch((err) => {
        res.status(400).send("Algo errado com a musica, tente novamente");
        console.log(err);
    });
});


router.delete("/delete/:nome", async (req, res) => {
    await Musica.deleteOne({nome: req.params.nome},req.body)
    .then(() => {
        res.status(200).send("Atualizado com sucesso");
    })
    .catch((err) => {
        res.status(400).send("Algo errado com a musica, tente novamente");
        console.log(err);
    });
});

module.exports = router;