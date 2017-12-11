module.exports = (sequelize, Sequelize) => {

  const Ejecutoria = sequelize.define('ejecutorias', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    nombre: { type: Sequelize.STRING(100) }
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return Ejecutoria;

};