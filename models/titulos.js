module.exports = (sequelize, Sequelize) => {

  const Titulo = sequelize.define('titulos', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    nombre: { type: Sequelize.STRNG(100) }
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return Titulo;

};