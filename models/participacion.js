module.exports = (sequelize, Sequelize, Aspirante, Oferta, Secretario) => {

  const Participacion = sequelize.define('participaciones', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idAspirante: { type: Sequelize.INTEGER, references: {
      model: Aspirante,
      key: 'id'
    }},
    idOferta: { type: Sequelize.INTEGER, references: {
      model: Oferta,
      key: 'id'
    }},
    idSecretario: { type: Sequelize.INTEGER, defaultValue: null, references: {
      model: Secretario,
      key: 'id'
    }},
    tipoProfesor: { type: Sequelize.VARCHAR(20), field: 'tipo_profesor' },
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