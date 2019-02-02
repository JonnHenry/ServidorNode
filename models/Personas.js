module.exports = (conexion, Sequelize) => {
    const Personas = conexion.define('Personas', {
        correo: {
            type: Sequelize.STRING,
            primaryKey: true,
            unique: true,
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },        
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        apellido: {
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