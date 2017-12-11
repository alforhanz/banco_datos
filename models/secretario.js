module.exports = (sequelize, Sequelize, Departamento) => {

  const Secretario = sequelize.define('secretarios', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idDepartamento: { type: Sequelize.INTEGER, references: {
      model: Departamento,
      key: 'id'
    }},
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

  return Secretario;

};