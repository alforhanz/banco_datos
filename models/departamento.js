module.exports = (sequelize, Sequelize, Facultad) => {

  const Departamento = sequelize.define('departamentos', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idFacultad: { type: Sequelize.INTEGER, references: {
      model: Facultad,
      key: 'id'
    }},
    codigo: { type: Sequelize.STRING(20) },
    nombre: { type: Sequelize.STRING(100) }
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return Departamento;

};
