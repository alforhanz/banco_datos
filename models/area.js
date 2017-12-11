module.exports = (sequelize, Sequelize, Departamento) => {

  const Area = sequelize.define('areas', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idDepartamento: { type: Sequelize.INTEGER, references: {
      model: Departamento,
      key: 'id'
    }},
    codigo: { type: Sequelize.STRING(20) },
    nombre: { type: Sequelize.STRING(100) }
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return Area;

};
