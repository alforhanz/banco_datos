module.exports = (sequelize, Sequelize) => {

  const Participacion = sequelize.define('participaciones', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idAspirante: { type: Sequelize.INTEGER, field: 'id_aspirante'},
    idOferta: { type: Sequelize.INTEGER, field: 'id_oferta'},
    idSecretario: { type: Sequelize.INTEGER, defaultValue: null, field: 'id_secretario'},
    // tipoProfesor: { type: Sequelize.STRING(20), field: 'tipo_profesor' },
    habilitada: { type: Sequelize.BOOLEAN, defaultValue: false },
    estado: { type: Sequelize.STRING(20), allowNull: false },
    observacion: { type: Sequelize.STRING(200), defaultValue: null },
    documentos: { type: Sequelize.JSON },
    fechaRegistro: {
      type: Sequelize.DATE, defaultValue: Sequelize.NOW, field: 'fecha_registro'
    },
    fechaModificacion: {
      type: Sequelize.DATE, defaultValue: Sequelize.NOW, field: 'fecha_modificacion'
    },
    fechaHabilitacion: {
      type: Sequelize.DATE, defaultValue: null, field: 'fecha_habilitacion'
    }
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return Participacion;

};