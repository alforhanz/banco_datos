module.exports = (sequelize, Sequelize, Area) => {

  const Oferta = sequelize.define('ofertas', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idArea: { type: Sequelize.INTEGER, references: {
      model: Area,
      key: 'id'
    }},
    tipoProfesor: {
      type: Sequelize.VARCHAR(20), allowNull: false, field: 'tipo_profesor'
    },
    extraordinaria: { type: Sequelize.BOOLEAN, defaultValue: false }

  }, {
    timestamps: false,
    freezeTableName: false
  });

  return Oferta;

};