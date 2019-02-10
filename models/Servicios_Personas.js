module.exports = (conexion, Sequelize) => {
    const Servicios_Personas = conexion.define('Servicios_Personas', 
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
        fotoServicio: 
        {// Mostrar la calificaion promedio en enteros del usuario
            type: Sequelize.STRING,
            allowNull: false
        },
        latitud: 
        {//Mostrar la calificaion promedio en enteros del usuario
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        longitud: 
        {//Mostrar la calificaion promedio en enteros del usuario
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        provincia: 
        {//Mostrar la calificaion promedio en enteros del usuario
            type: Sequelize.STRING,
            allowNull: false
        },
        ciudad: 
        {//Mostrar la calificaion promedio en enteros del usuario
            type: Sequelize.STRING,
            allowNull: false
        },
        descripcionServicio: 
        {//Mostrar la calificaion promedio en enteros del usuario
            type: Sequelize.STRING,
            allowNull: true
        }
    },
    {
        timestamps: false
    })
    return Servicios_Personas
  }