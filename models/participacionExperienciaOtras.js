module.exports = (sequelize, Sequelize, Participacion, ExperienciaOtras, Comisionado) => {

  const ParticipacionExperienciaOtras = sequelize.define('participaciones_experiencias_otras', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idParticipacion: { type: Sequelize.INTEGER, references: {
      model: Participacion,
      key: 'id'
    }},
    idExperienciaOtras: { type: Sequelize.INTEGER, references: {
      model: ExperienciaOtras,
      key: 'id'
    }},
    idComisionado: { type: Sequelize.INTEGER, defaultValue: null, references: {
      model: Comisionado,
      key: 'id'
    }},
    numeroCertificacion: { type: Sequelize.STRING(20) },
    descripcion: { type: Sequelize.STRING(20) },
    conocimiento: { type: Sequelize.FLOAT(2), defaultValue: null },
    afin: { type: Sequelize.FLOAT(2), defaultValue: null },
    cultural: { type: Sequelize.FLOAT(2), defaultValue: null },
    observacion: { type: Sequelize.STRING(50), defaultValue: null }
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return ParticipacionExperienciaOtras;

};