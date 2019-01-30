module.exports = (conexion, Sequelize) => {
    const Servicios = conexion.define('Servicios', 
    {
        idServicio: 
        {
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement:true,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        DescripcionServicio: 
        {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    })
    return Servicios
  }