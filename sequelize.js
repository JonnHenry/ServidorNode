var Sequelize = require('sequelize');
const ComentariosModel = require('./models/Comentarios');
const Comentarios_ServiciosModel = require('./models/Comentarios_Servicios');
const FotoServiciosModel = require('./models/FotoServicios');
const PersonasModel = require('./models/Personas');
const ServiciosModel = require('./models/Servicios');
const Servicios_PersonaModel = require('./models/Servicios_Personas');

var conexion = new Sequelize('fastservices','root','12345678',{
    dialect: 'mysql'
});

var Personas = PersonasModel(conexion,Sequelize);
var Comentarios = ComentariosModel(conexion,Sequelize);
var Servicios = ServiciosModel(conexion,Sequelize);
var Comentarios_Servicios = Comentarios_ServiciosModel(conexion,Sequelize);
var FotoServicios = FotoServiciosModel(conexion,Sequelize);
var Servicios_Persona = Servicios_PersonaModel(conexion,Sequelize);

conexion.sync({force: true}).then(()=>{
    console.log('Tablas Creadas exitosamente!')
});

module.exports.Personas = Personas;
module.exports.Comentarios = Comentarios;
module.exports.Servicios = Servicios;
module.exports.Comentarios_Servicios = Comentarios_Servicios;
module.exports.FotoServicios = FotoServicios;
module.exports.Servicios_Persona = Servicios_Persona;