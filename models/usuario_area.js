module.exports = (sequelize, Sequelize) => {

  const Usuario_Area = sequelize.define('usuarios_areas', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idUsuario: { type: Sequelize.INTEGER, field: 'id_usuario'},
    idArea: { type: Sequelize.INTEGER, field: 'id_area'},
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return Usuario_Area;

};