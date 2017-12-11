module.exports = (sequelize, Sequelize) => {

  const ExperienciaOtras = sequelize.define('experiencias_otras', {
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