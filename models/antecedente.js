module.exports = (sequelize, Sequelize) => {

  const Antecedente = sequelize.define('antecedentes', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idAspirante: { type: Sequelize.INTEGER, field: 'id_aspirante'},
    idArea: { type: Sequelize.INTEGER, field: 'id_area'},
    anio: { type: Sequelize.STRING(4) },
    semestre: { type: Sequelize.STRING(10) },
    tipoProfesor: { type: Sequelize.STRING(10), allowNull: false, field: 'tipo_profesor' },
    codProfesor: { type: Sequelize.STRING(20), field: 'codigo_profesor' },
    dedicacion: { type: Sequelize.STRING(20) },
    docenciaSuperior: { type: Sequelize.BOOLEAN, field: 'docencia_superior'},
    certificacionesEvaluacion: {
      type: Sequelize.JSON, field: 'certificaciones_evaluacion'
    }
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return Antecedente;

};