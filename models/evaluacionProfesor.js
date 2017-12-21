module.exports = (sequelize, Sequelize) => {

  const EvaluacionProfesor = sequelize.define('evaluacionesProfesor', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idParticipacion: { type: Sequelize.INTEGER, field: 'id_participacion'},
    idComisionado: {
      type: Sequelize.INTEGER, defaultValue: null, field: 'id_comisionado'
    },
    numeroCertificacion: { type: Sequelize.STRING(20), field: 'numero_certificacion' },
    descripcion: { type: Sequelize.STRING(50) },
    conocimiento: { type: Sequelize.FLOAT(2), defaultValue: null },
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return EvaluacionProfesor;

};