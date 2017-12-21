module.exports = (sequelize, Sequelize) => {

  const Usuario = sequelize.define('usuarios', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    tipoUsuario: { type: Sequelize.STRING(20), allowNull: false, field: 'tipo_usuario'},
    cedula: { type: Sequelize.STRING(20), unique: true },
    contrasenia: { type: Sequelize.STRING(200), allowNull: false },
    nombres: {type: Sequelize.STRING(50) },
    apellidos: {type: Sequelize.STRING(50) },
    correo: {type: Sequelize.STRING(50) },
    telFijo: {type: Sequelize.STRING(10), field: 'tel_fijo' },
    telCelular: {type: Sequelize.STRING(11), field: 'tel_celular' },
    direccion: {type: Sequelize.STRING(100) },
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

  return Usuario;

};
