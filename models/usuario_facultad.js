module.exports = (sequelize, Sequelize) => {

  const Usuario_Facultad = sequelize.define('usuarios_facultades', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idUsuario: { type: Sequelize.INTEGER, field: 'id_usuario'},
    idFacultad: { type: Sequelize.INTEGER, field: 'id_facultad'},
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return Usuario_Facultad;

};