module.exports = (conexion, Sequelize) => {
    const FotoServicios = conexion.define('FotoServicios', 
    {
        idPersona: 
        {
            type: Sequelize.INTEGER,
            references: 
            {
                model: Personas,
                key: idPersona,
                as: idPersona
            }
        },
        idServicio: 
        {
            type: Sequelize.INTEGER,
            references: 
            {
                model: Servicios,
                key: idServicio,
                as: idServOfrece
            }
        },
        direccionFoto: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    })
    return FotoServicios
  }