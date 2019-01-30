module.exports.Comentarios = (conexion, Sequelize) => {
    const Comentarios = conexion.define('Comentarios', 
    {
        idComentario: 
        {
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement:true
        },
        comentDescr: 
        {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    })
    return Comentarios
  }