module.exports = (conexion, Sequelize) => {
    const Comentarios_Servicios = conexion.define('Comentarios_Servicios', 
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
        idComentario: 
        {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
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