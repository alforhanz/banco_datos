module.exports = (sequelize, Sequelize, Participacion, ExperienciaUP, Comisionado) => {

  const Participacion_ExperienciaUP= sequelize.define('participaciones_experienciasUp', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idParticipacion: { type: Sequelize.INTEGER, field: 'id_participacion'},
    idExperienciaUP: { type: Sequelize.INTEGER, field:'id_experienciaUp'},
    idComisionado: {
      type: Sequelize.INTEGER, defaultValue: null, field: 'id_comisionado'
    },
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

  return Participacion_ExperienciaUP;

};