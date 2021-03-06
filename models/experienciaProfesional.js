module.exports = (sequelize, Sequelize) => {

  const ExperienciaProfesional = sequelize.define('experienciasProfesionales', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idParticipacion: { type: Sequelize.INTEGER, field: 'id_participacion'},
    idComisionado: {
      type: Sequelize.INTEGER, defaultValue: null, field: 'id_comisionado'
    },
    numeroCertificacion: { type: Sequelize.STRING(20), field: 'numero_certificacion' },
    institucion: { type: Sequelize.STRING(100) },
    cargo: { type: Sequelize.STRING(50) },
    anio: { type: Sequelize.STRING(4) },
    conocimiento: { type: Sequelize.FLOAT(2), defaultValue: null },
    afin: { type: Sequelize.FLOAT(2), defaultValue: null },
    cultural: { type: Sequelize.FLOAT(2), defaultValue: null },
    observacion: { type: Sequelize.STRING(50), defaultValue: null }
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return ExperienciaProfesional;

};