var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const modulo = require('./sequelize');//Se trae todo lo que hay en module.exports del archivo sequelize
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
var port = 3000;


const Personas = modulo.Personas;
const Servicios = modulo.Servicios;
const Comentarios = modulo.Comentarios;
const Servicios_Personas = modulo.Servicios_Personas;
const FotoServicios = modulo.FotoServicios;
const Comentarios_Servicios = modulo.Comentarios_Servicios;







app.listen(port, () => {
    console.log('Escuchando en el puerto'+port);
  })