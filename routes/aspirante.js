var express = require('express');
var router = express.Router();

const {Oferta, Area, Usuario, Participacion} = require('../database/sequelize');
Oferta.belongsTo(Area, {foreignKey: 'idArea'});

function MIDDLEWARE_ASPIRANTE(req, res, next) {
  if (!req.user) {
    res.redirect('back');
  }
  if (req.user.tipoUsuario != 'ASPIRANTE') {
    res.redirect('back');
  }
  next();
}

/* GET página de inicio de aspirantes */
router.get('/inicio', function (req, res, next) {
  // console.log(req.user.tipoUsuario);
  // console.log(res.locals.loggedIn);  

  var error = req.flash('error');

  Oferta.findAll({include: [Area]})
  .then(result => {
    var results = result.map(function(item){
      var value = {
        id: item.dataValues.id,
        tipoProfesor: item.dataValues.tipoProfesor,
        extraordinaria: item.dataValues.extraordinaria,
        idArea: item.dataValues.idArea,
        nombreArea: item.dataValues.area.dataValues.nombre,
        codigoArea: item.dataValues.area.dataValues.codigo,
        idAspirante: req.user.id
      };
      return value;
    });

    res.render('aspirante/inicio', {ofertas: results, error: error});
  });

});

/* GET creacion de participacion/solicitud */
router.get('/crear-participacion/:id/:aspirante', function (req, res, next) {
  //console.log(req.params.id + ' ' + req.params.aspirante);
  Usuario.findById(req.params.aspirante)
  .then(result => {
    var info = {
      cedula: result.dataValues.cedula,
      nombre: result.dataValues.nombres + ' ' + result.dataValues.apellidos
    };
    Oferta.findById(req.params.id, {include: [Area]})
    .then(result => {
      info.tipoProfesor = result.dataValues.tipoProfesor;
      info.nombreArea = result.dataValues.area.dataValues.nombre;

      res.render('formularios/crear-participacion', {
        oferta: req.params.id,
        aspirante: req.params.aspirante,
        info: info
      });
    });
  });
});

router.post('/crear-participacion', function (req, res, next){
  var documentos = {
    curriculum: req.body.curriculum,
    cerSaludFisica: req.body.cerFisica,
    cerSaludMental: req.body.cerMental,
    otros: req.body.otros
  };
  Participacion.build({
    idAspirante: req.body.idAspirante,
    idOferta: req.body.idOferta,
    estado: 'CREACION',
    documentos: JSON.stringify(documentos)
  })
  .save().then(result => {
    res.redirect('/aspirante/inicio');
  }).catch(err => {
    req.flash('error', err);
    res.redirect('/aspirante/inicio');
  });
});

/* GET test */
router.get('/redir', function (req, res, next) {
  if (req.user) {
    if ((req.user.tipoUsuario == 'DIRECTOR')) {
      res.render('error');
    }
    res.render('aspirante/inicio', {
      value: req.user.tipoUsuario
    })
  } else {
    res.redirect('/');
  }
});

module.exports = router;