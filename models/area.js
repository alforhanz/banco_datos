module.exports = (sequelize, Sequelize) => {

  const Area = sequelize.define('areas', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idDepartamento: { type: Sequelize.INTEGER, field: 'id_departamento'},
    codigo: { type: Sequelize.STRING(20) },
    nombre: { type: Sequelize.STRING(100) }
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return Area;

};
