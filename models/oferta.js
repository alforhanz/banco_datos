module.exports = (sequelize, Sequelize) => {

  const Oferta = sequelize.define('ofertas', {
    id: {
      type: Sequelize.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
    },
    idArea: { type: Sequelize.INTEGER, field: 'id_area'},
    tipoProfesor: {
      type: Sequelize.STRING(20), allowNull: false, field: 'tipo_profesor'
    },
    extraordinaria: { type: Sequelize.BOOLEAN, defaultValue: false }

  }, {
    timestamps: false,
    freezeTableName: false
  });

  return Oferta;

};