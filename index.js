var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const modulo = require('./sequelize'); //Se trae todo lo que hay en module.exports del archivo sequelize
var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
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

app.get('/personas/:correouser', (req, res) => {
  let correoUser = req.params.correouser
  Personas.findOne({
      where: {
        correo: correoUser
      }
    })
    .then(persona => {
      res.json(persona)
    })
})

app.get('/personas/ciudad/:nombciudad', (req, res) => {
  let ciudadUser = req.params.nombciudad
  Personas.findOne({
      where: {
        ciudad: ciudadUser
      }
    })
    .then(persona => {
      res.json(persona)
    })
})

app.get('/personas/provincia/:nombprov', (req, res) => {
  Personas.findOne({
      where: {
        ciudad: req.params.nombprov
      }
    })
    .then(persona => {
      res.json(persona)
    })
})

app.put('/personas/:id', (req, res) => {
  console.log(req.body)
  let correoPersona = req.params.id
  let nuevosDatos = req.body
  Personas.findOne({ where: { correo: correoPersona } })
    .then(persona => {
      persona.update(nuevosDatos)
        .then(nuevaPersona => {
          res.json(nuevaPersona);
        })
    })
})

app.post('/login/persona', (req, res) => {
  console.log('Los datos que llegan son:'+ req.body)
  Personas.find({
      where: {
        correo: req.body.correo,
        clave: req.body.clave
      },
      attributes: { 
        exclude: ['clave'] // Para poder excluir el campo clave en la respuesta
       } 
    })
    .then(persona => {
      res.json(persona);
    })
})

app.post('/personas/nuevo', (req, res) => {
  Personas.findOrCreate({
      where: {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        clave: req.body.clave,
        provincia: req.body.provincia,
        ciudad: req.body.ciudad,
        urlFoto: req.body.urlFoto
      }
    })
    .spread(function (userResult, created) {
      if (created) {
        res.json({
          respuesta: 'Persona creada'
        })
      } else {
        res.json({
          respuesta: 'La persona ya se encuentra registrada'
        })
      }
    }); 
}) 




app.post('/servicio/nuevo', (req, res) => {
  console.log(req.body)
  Servicios.create({
    descripcionServicio: req.body.descripcionServicio
  }).then(persona => {
    res.json({ respuesta: 'Servicio creado' })
  })
})

app.post('/fotoservicio/nuevo', (req, res) => { //La direccion de las fotos van separadas por un punto y coma al ingresar 
  console.log(req.body)
  FotoServicios.create({
    idPersona: req.body.idPersona,
    idServicio: req.body.idServicio,
    direccionFoto: req.body.direccionFoto
  }).then(persona => {
    res.json({ respuesta: 'Creado con exito' })
  })
})


app.listen(port, () => {
  console.log('Escuchando en el puerto' + port)
})