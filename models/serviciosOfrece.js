module.exports = (conexion, Sequelize) => {
    const ServicioOfrece = conexion.define('serviciosOfrece', 
    {
        idPersOfrece: 
        {
            type: Sequelize.INTEGER,
            references: 
            {
                model: Personas,
                key: idPersona,
                as: idPersOfrece
            }
        },
        idServOfrece: 
        {
            type: Sequelize.INTEGER,
            references: 
            {
                model: Servicios,
                key: idServicio,
                as: idServOfrece
            }
        },
        calificacionGeneral: {//Mostrar la calificaion promedio en enteros del usuario
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    })
    return ServicioOfrece
  }