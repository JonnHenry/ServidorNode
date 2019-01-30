module.exports.ComentServicios = (conexion, Sequelize) => {
    const ComentServicios = conexion.define('ComentServicios', 
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
                as: idServicio
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        idComentario: 
        {
            type: Sequelize.INTEGER,
            references: 
            {
                model: Comentarios,
                key: idComentario,
                as: idComentario
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
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