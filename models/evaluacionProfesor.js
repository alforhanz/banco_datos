module.exports = (sequelize, Sequelize, Participacion, Comisionado) => {

  const Director = EvaluacionProfesor.define('evaluaciones_profesor', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idParticipacion: { type: Sequelize.INTEGER, references: {
      model: Participacion,
      key: 'id'
    }},
    idComisionado: { type: Sequelize.INTEGER, defaultValue: null, references: {
      model: Comisionado,
      key: 'id'
    }},
    numeroCertificacion: { type: Sequelize.STRING(20), field: 'numero_certificacion' },
    descripcion: { type: Sequelize.STRING(50) },
    conocimiento: { type: Sequelize.FLOAT(2), defaultValue: null },
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return EvaluacionProfesor;

};