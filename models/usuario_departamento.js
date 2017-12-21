module.exports = (sequelize, Sequelize) => {

  const Usuario_Departamento = sequelize.define('usuarios_departamentos', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idUsuario: { type: Sequelize.INTEGER, field: 'id_usuario'},
    idDepartamento: { type: Sequelize.INTEGER, field: 'id_departamento'},
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return Usuario_Departamento;

};