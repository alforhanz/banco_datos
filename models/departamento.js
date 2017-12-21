module.exports = (sequelize, Sequelize) => {

  const Departamento = sequelize.define('departamentos', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idFacultad: { type: Sequelize.INTEGER, field: 'id_facultad' },
    codigo: { type: Sequelize.STRING(20) },
    nombre: { type: Sequelize.STRING(100) }
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return Departamento;

};
