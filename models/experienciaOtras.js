module.exports = (sequelize, Sequelize) => {

  const ExperienciaOtras = sequelize.define('experienciasOtras', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    nombre: { type: Sequelize.STRING(100) }
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return ExperienciaOtras;

};