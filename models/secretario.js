module.exports = (sequelize, Sequelize) => {

  const Secretario = sequelize.define('secretarios', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idDepartamento: { type: Sequelize.INTEGER, field: 'id_departamento'},
    cedula: { type: Sequelize.STRING(20), allowNull: false, unique: true },
    contrasenia: { type: Sequelize.STRING(200), allowNull: false },
    nombre: { type: Sequelize.STRING(50) },
    fechaRegistro: {
      type: Sequelize.DATE, defaultValue: Sequelize.NOW, field: 'fecha_registro'
    },
    fechaModificacion: {
      type: Sequelize.DATE, defaultValue: Sequelize.NOW, field: 'fecha_modificacion'
    }
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return Secretario;

};