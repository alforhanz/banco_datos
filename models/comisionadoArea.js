module.exports = (sequelize, Sequelize, Comisionado, Area) => {

  const ComisionadoArea = sequelize.define('comisionados_areas', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idComisionado: { type: Sequelize.INTEGER, references: {
      model: Comisionado,
      key: 'id'
    }},
    idArea: { type: Sequelize.INTEGER, references: {
      model: Area,
      key: 'id'
    }}
  }, {
    timestamps: false,
    freezeTableName: false
  });

  return ComisionadoArea;

};