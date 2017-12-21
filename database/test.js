const {connection, Oferta, Area} = require('./modelTests');

Oferta.belongsTo(Area, {foreignKey: 'idArea'});

Oferta.findAll({ where: {tipoProfesor: 'ESPECIAL'}, include: [Area]}).then(result => {
  const results = result.map(item => {
    return {
      id: item.dataValues.id,
      tipoProfesor: item.dataValues.tipoProfesor,
      extraordinaria: item.dataValues.extraordinaria,
      idArea: item.dataValues.idArea,
      codigoArea: item.dataValues.area.dataValues.nombre
    };
  });

  console.log(results);
});

