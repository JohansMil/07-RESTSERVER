// Cargamos el fichero de GLOBALS
require('./config/config');


const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded - middleware !! es carpeta publica
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json  - middleware !! es carpeta publica
app.use(bodyParser.json())



// Servicios que escuchan el GET, POST, 
// Ir a registros
app.get('/usuario/:id', function(req, res) {
    let id = req.params.id;

    res.json(`getUsuario ${ id }`)

})


// CREAR registros
app.post('/usuario/:id', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined || body.nombre === '') {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        })
    } else {
        res.json({
            persona: body
        })
    }
})


// UPDATE registros PUT, PATCH
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    })
})


// DELETE registros 
app.delete('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json(`borraUsuario ${ id }`)
})



app.listen(3000, () => {
    console.log(`Escuchando peticiones en puerto ${process.env.PORT}`, process.env.PORT);
})