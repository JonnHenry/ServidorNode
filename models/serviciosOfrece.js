module.exports = (conexion, Sequelize) => {
    const ServicioOfrece = conexion.define('ServiciosOfrece', 
    {
        idPersona: 
        {
            type: Sequelize.INTEGER,
            references: 
            {
                model: 'Personas',
                key: 'idPersona',
                as: 'idPersona'
            }
        },
        idServOfrece: 
        {
            type: Sequelize.INTEGER,
            references: 
            {
                model: 'Servicios',
                key: 'idServicio',
                as: 'idServOfrece'
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