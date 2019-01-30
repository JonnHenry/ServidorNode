var Sequelize = require('sequelize');
const ComentariosModel = require('./models/Comentarios');
const ComentServiciosModel = require('./models/ComentServicios');
const FotoServiciosModel = require('./models/FotoServicios');
const PersonasModel = require('./models/Personas');
const ServiciosModel = require('./models/Servicios');
const ServiciosOfreceModel = require('./models/serviciosOfrece');

var conexion = new Sequelize('fastservices','root','12345678',{
    dialect: 'mysql'
});


const Personas = PersonasModel(conexion,Sequelize);
const Comentarios = ComentariosModel(conexion,Sequelize);
const Servicios = ServiciosModel(conexion,Sequelize);
const ComentServicios = ComentServiciosModel(conexion,Sequelize);
const FotoServicios = FotoServiciosModel(conexion,Sequelize);
const ServiciosOfrece = ServiciosOfreceModel(conexion,Sequelize);

conexion.sync({force: true}).then(()=>{
    console.log('Tablas Creadas exitosamente!')
});