module.exports.FotoServicios = (conexion, Sequelize) => {
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
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        idServicio: 
        {
            type: Sequelize.INTEGER,
            references: 
            {
                model: Servicios,
                key: idServicio,
                as: idServOfrece
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
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