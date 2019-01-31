module.exports = (conexion, Sequelize) => {
    const Servicios_Persona = conexion.define('Servicios_Persona', 
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
        idServOfrece: 
        {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: 
            {
                model: 'Servicios',
                key: 'idServicio',
                as: 'idServOfrece'
            }
        },
        calificacionGeneral: {//Mostrar la calificaion promedio en enteros del usuario
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false
    })
    return Servicios_Persona
  }