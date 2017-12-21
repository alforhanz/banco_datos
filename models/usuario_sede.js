module.exports = (sequelize, Sequelize) => {

  const Usuario_Sedes = sequelize.define('usuarios_sedes', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idUsuario: { type: Sequelize.INTEGER, field: 'id_usuario'},
    idSedes: { type: Sequelize.INTEGER, field: 'id_sede'},
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return Usuario_Sedes;

};