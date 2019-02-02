module.exports = (conexion, Sequelize) => {
    const FotoServicios = conexion.define('FotoServicios', 
    {
        idPersona: 
        {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true,
            references: 
            {
                model: 'Personas',
                key: 'correo',
                as: 'idPersona'
            }
        },
        idServicio: 
        {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: 
            {
                model: 'Servicios',
                key: 'idServicio',
                as: 'idServicio'
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