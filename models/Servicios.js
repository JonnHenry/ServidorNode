module.exports.Servicios = (conexion, Sequelize) => {
    const Servicios = conexion.define('Servicios', 
    {
        idServicio: 
        {
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement:true
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