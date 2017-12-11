module.exports = (sequelize, Sequelize, Aspirante, Area) => {

  const Antecedente = sequelize.define('antecedentes', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idAspirante: { type: Sequelize.INTEGER, references: {
      model: Aspirante,
      key: 'id'
    }},
    idArea: { type: Sequelize.INTEGER, references: {
      model: Area,
      key: 'id'
    }},
    anio: { type: Sequelize.VARCHAR(4) },
    semestre: { type: Sequelize.VARCHAR(10) },
    tipoProfesor: { type: Sequelize.VARCHAR(10), allowNull: false, field: 'tipo_profesor' },
    codProfesor: { type: Sequelize.STRING(20), field: 'codigo_profesor' },
    dedicacion: { type: Sequelize.STRING(20) },
    docenciaSuperior: { type: Sequelize.BOOLEAN, field: 'docencia_superior'
    certificacionesEvaluacion: {
      type: Sequelize.JSON, field: 'certificaciones_evaluacion'
    }
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return Antecedente;

};