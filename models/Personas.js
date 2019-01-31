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
        latitud: {
            type: Sequelize.STRING,
            allowNull: false
        },
        longitud: {

            type: Sequelize.STRING,
            allowNull: false
        },
        provincia: {
            type: Sequelize.STRING,
            allowNull: false
        },
        ciudad: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    })
    return Personas
}