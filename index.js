var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const modulo = require('./sequelize');//Se trae todo lo que hay en module.exports del archivo sequelize
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
var port = 3000;

//Objetos de las instancias de las bases de datos
const Personas = modulo.Personas;
const Servicios = modulo.Servicios;
const Comentarios = modulo.Comentarios;
const Servicios_Personas = modulo.Servicios_Personas;
const FotoServicios = modulo.FotoServicios;
const Comentarios_Servicios = modulo.Comentarios_Servicios;

app.get('/servicios', (req, res) => {
  Servicios.findAll()
    .then(servicios => {
      res.json(servicios)    
    })
})

app.get('/personas', (req, res) => {
  Personas.findAll().then(personas => {
      res.json(personas)    
    })
})

app.get('/personas/correo/:correouser', (req, res) => {
  let correoUser = req.params.correouser
  Personas.findOne({ where: {correo: correoUser} })
    .then(persona => {
      res.json(persona)
    })
})

app.get('/personas/ciudad/:nombciudad', (req, res) => {
  let ciudadUser = req.params.nombciudad
  Personas.findOne({ where: {ciudad: ciudadUser} })
    .then(persona => {
      res.json(persona)
    })
})

app.get('/personas/provincia/:nombprov', (req, res) => {
  let ciudadUser = req.params.nombprov
  Personas.findOne({ where: {ciudad: ciudadUser} })
    .then(persona => {
      res.json(persona)
    })
})










app.listen(port, () => {
    console.log('Escuchando en el puerto'+port);
  })