module.exports = (conexion, Sequelize) => {
    const Comentarios = conexion.define('Comentarios', 
    {
        idComentario: 
        {
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement:true,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        comentDescr: 
        {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    });
    return Comentarios
  }