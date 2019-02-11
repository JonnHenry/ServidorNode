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


app.get('/personas', (req, res) => {
  Personas.findAll().then(personas => {
    res.json(personas)
  }).catch(function (err) { 
    res.json({'error': err.message});
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
    }).catch(function (err) { 
      res.json({'error': err.message});
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
    }).catch(function (err) { 
      res.json({'error': err.message});
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
    }).catch(function (err) { 
      res.json({'error': err.message});
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
    }).catch(function (err) { 
      res.json({'error': err.message});
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
    }).catch(function (err) { 
      res.json({'error': err.message});
    })

})

app.post('/personas/nuevo', (req, res) => {
  Personas.findOrCreate({
      where: {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        clave: req.body.clave,
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

// Servicios
app.post('/servicio/nuevo', (req, res) => { // Para poder crear un servicio
  Servicios.create({
    descripcionServicio: req.body.descripcionServicio
  }).then(persona => {
    res.json({ respuesta: 'Servicio creado' })}
  ).catch(function (err) { 
    res.json({ respuesta: err.message});
  })

  
})

app.get('/servicios', (req, res) => { // Para poder obtener todos los servicios
  Servicios.findAll()
    .then(servicios => {
      res.json(servicios)
    })
})


app.get('/servicio/busca/:id', (req, res) => {// Saber la descripcion de un servicio
  console.log('El valor que esta llegando es :' + req.params.id);
  Servicios.findOne({
      where: {
        idServicio: req.params.id
      }
    })
    .then(servicio => {
      res.json({ 'respuesta': servicio.descripcionServicio})
    }).catch(function (err) { 
      res.json({ 'respuesta': 'Error 500 - Internal server error'});
    })
})

app.post('/servicios/nuevo', (req, res) => { //Para poder tener un crear un servico de personas
  console.log(req.body);
  Servicios_Personas.create({
    correo: req.body.idPersona, 
    idServicio: req.body.idServOfrece,
    fotoServicio: req.body.fotoServicio,
    latitud: req.body.latitud,
    longitud: req.body.longitud,
    ciudad: req.body.ciudad,
    provincia: req.body.provincia,
    descripcionServicio: req.body.descripcionServicio
  })
  .then(persona => {
    res.json({ respuesta: 'Servicio del usuario creado' })})
  .catch(function (err) { 
    res.json({ respuesta: err.message});
  })
}); 


app.get('/obtenerservicios/:idServicio', (req, res) => { // Para poder obtener todos los servicios y el numero de resultados
  console.log('Los datos que son:' + req.params.idServicio);
  Servicios_Personas.findAndCountAll({
    where : {
      idServicio: req.params.idServicio
    }
  }).then(result => {
      res.json({
        'cantidadServicios' : result.count,
        'resulBusqueda' : result.rows,
        'errorBuscar': false
      })
      console.log(result.rows)
    })
    .catch((err) => { 
      if (err.statusCode) { 
        res.status(err.statusCode); 
      } else { 
        res.status(500); 
      } 
      res.json({
        'cantidadServicios': 0, 
        'resulBusqueda': err.message,
        'errorBuscar': true
      }
      );
    })
})

app.post('/servicio/persona', (req, res) => { //buscar a una persona que ofrece servicio
  console.log(req.body)
  Servicios_Personas.findOne({
      where: {
        correo: req.body.correo,
        idServicio: req.body.idServicio
      }
    })
    .then(personaserv => {
      res.json(personaserv);
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
  }).catch(function (err) { 
    res.json({ respuesta: err.message});
  })
})


app.listen(port, () => {
  console.log('Escuchando en el puerto' + port)
})