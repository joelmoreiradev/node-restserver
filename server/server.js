const express = require('express')
const app = express();

require('./config/config')

const bodyParser = require('body-parser');
const { response } = require('express');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());





 
app.get('/usuario', function (req, res) {
  res.json('get usuario');
});

app.post('/usuario', function (req, res) {

    // respuesta de body parser
    let persona = req.body;

    // enviar un status code si el cliente no envía el nombre en el body.
    if(persona.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    // de lo contrario, responder con el nombre de la persona.
    } else {

        res.json({
        persona
    });

    }

    console.log(persona);

    
  });

app.put('/usuario/:id', function (req, res) {

  let id = req.params.id;

   res.json({
       id
   });
});

app.delete('/usuario', function (req, res) {
    res.json('delete usuario');
  });
 
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
});