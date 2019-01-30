module.exports = (conexion, Sequelize) => {
    const Comentarios_Servicios = conexion.define('Comentarios_Servicios', 
    {
        idPersona: 
        {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
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
            allowNull: false,
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
            allowNull: false,
            references: 
            {
                model: 'Comentarios',
                key: 'idComentario',
                as: 'idComentario'
            }
        },
        calificacion: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: true
    })
    return Comentarios_Servicios
  }