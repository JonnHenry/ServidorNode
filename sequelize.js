var Sequelize = require('sequelize');
var conexion = new Sequelize('fastservices','root','12345678',{
    dialect: 'mysql',
});


conexion.sync().then(()=>{
    console.log('Tablas Creadas exitosamente!')
});