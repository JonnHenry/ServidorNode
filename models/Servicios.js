module.exports = (conexion, Sequelize) => {
    const Servicios = conexion.define('Servicios', 
    {
        idServicio: 
        {
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement:true,
            unique: true,
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        descripcionServicio: 
        {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    })
    return Servicios
  }