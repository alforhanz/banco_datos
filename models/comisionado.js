module.exports = (sequelize, Sequelize) => {

  const Comisionado = sequelize.define('comisionados', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    cedula: { type: Sequelize.STRING(20), allowNull: false, unique: true },
    contrasenia: { type: Sequelize.VARCHAR(50), allowNull: false },
    nombre: { type: Sequelize.VARCHAR(50) },
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

  return Comisionado;

};