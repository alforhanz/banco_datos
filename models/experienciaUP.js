module.exports = (sequelize, Sequelize) => {

  const ExperienciaUP = sequelize.define('experienciasUp', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    nombre: { type: Sequelize.STRING(100) }
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return ExperienciaUP;

};