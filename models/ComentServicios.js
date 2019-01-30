module.exports = (conexion, Sequelize) => {
    const ComentServicios = conexion.define('ComentServicios', 
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
        idServicio: 
        {
            type: Sequelize.INTEGER,
            references: 
            {
                model: 'Servicios',
                key: 'idServicio',
                as: 'idServicio'
            }
        },
        idComentario: 
        {
            type: Sequelize.INTEGER,
            references: 
            {
                model: 'Comentarios',
                key: 'idComentario',
                as: 'idComentario'
            }
        },
        calificacion: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: true
    })
    return ComentServicios
  }