module.exports = (conexion, Sequelize) => {
    const FotoServicios = conexion.define('FotoServicios', 
    {
        correo: 
        {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true,
            references: 
            {
                model: 'Personas',
                key: 'correo',
                as: 'correo'
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