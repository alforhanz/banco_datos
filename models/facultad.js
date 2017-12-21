module.exports = (sequelize, Sequelize) => {

  const Facultad = sequelize.define('facultades', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idSede: { type: Sequelize.INTEGER, field: 'id_sede'},
    codigo: { type: Sequelize.STRING(20) },
    nombre: { type: Sequelize.STRING(100) }
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return Facultad;

};  