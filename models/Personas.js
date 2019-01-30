module.exports.Personas = (conexion, Sequelize) => {
    const Personas = conexion.define('Personas', {
        idPersona: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
        telefono: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    })
    return Personas
}