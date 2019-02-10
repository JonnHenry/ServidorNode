module.exports = (conexion, Sequelize) => {
    const Comentarios = conexion.define('Comentarios', 
    {
        idComentario: 
        {
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement:true,
            unique: true,
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        comentDescripcion: 
        {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    });
    return Comentarios
  }