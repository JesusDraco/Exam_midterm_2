const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.use(express.static('Public')); 

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/Public/index.html');
});

app.get('/hero/:id', async (req, res) => {
    try {
        const response = await axios.get(`https://akabab.github.io/superhero-api/api/id/${req.params.id}.json`);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener el superhéroe');
    }
});

app.get('/search/:name', async (req, res) => {
    try {
        const response = await axios.get(`https://akabab.github.io/superhero-api/api/all.json`);
        const heroes = response.data.filter(hero => hero.name.toLowerCase().includes(req.params.name.toLowerCase()));
        res.send(heroes);
    } catch (error) {
        res.status(500).send('Error al buscar el superhéroe');
    }
});

app.get('/powerstats/:id', async (req, res) => {
    try {
        const response = await axios.get(`https://akabab.github.io/superhero-api/api/powerstats/${req.params.id}.json`);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener las estadísticas de poder del superhéroe');
    }
});

app.get('/appearance/:id', async (req, res) => {
    try {
        const response = await axios.get(`https://akabab.github.io/superhero-api/api/appearance/${req.params.id}.json`);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener la apariencia del superhéroe');
    }
});

app.get('/biography/:id', async (req, res) => {
    try {
        const response = await axios.get(`https://akabab.github.io/superhero-api/api/biography/${req.params.id}.json`);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener la biografía del superhéroe');
    }
});

app.get('/connections/:id', async (req, res) => {
    try {
        const response = await axios.get(`https://akabab.github.io/superhero-api/api/connections/${req.params.id}.json`);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener las conexiones del superhéroe');
    }
});

app.get('/work/:id', async (req, res) => {
    try {
        const response = await axios.get(`https://akabab.github.io/superhero-api/api/work/${req.params.id}.json`);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener la información de trabajo del superhéroe');
    }
});



app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
