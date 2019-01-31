module.exports = (conexion, Sequelize) => {
    const Personas = conexion.define('Personas', {
        idPersona: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        apellidos: {
            type: Sequelize.STRING,
            allowNull: false
        },
        correo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        clave: {
            type: Sequelize.STRING,
        },
        latitud: {
            type: Sequelize.STRING,
        },
        longitud: {

            type: Sequelize.STRING,
        },
        provincia: {
            type: Sequelize.STRING,
        },
        ciudad: {
            type: Sequelize.STRING,
        }
    }, {
        timestamps: false
    })
    return Personas
}