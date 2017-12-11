module.exports = (sequelize, Sequelize) => {

  const Sede = sequelize.define('sedes', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    codigo: { type: Sequelize.STRING(20) },
    nombre: { type: Sequelize.STRING(100) }
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return Sede;

};  