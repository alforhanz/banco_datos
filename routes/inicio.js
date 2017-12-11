var express = require('express');
var router = express.Router();

const {Aspirante} = require('../database/sequelize.js');

/* GET página de inicio */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicio' });
});

/* GET formulario de registro para participantes */
router.get('/registro-aspirante', function(req, res, next) {
  res.render('formularios/registro-aspirante');
});

/* POST formulario de registro para participantes */
router.post('/registro-aspirante', function(req, res, next) {
  let cedula = `${req.body.provincia}${req.body.tipo_cedula}${req.body.libro}${req.body.tomo}`;
  Aspirante.findOne({ where: {cedula: cedula} }).then(result => {
    if (result) {
      res.render('formularios/registro-aspirante', {
        valError: true,
        cedula: cedula
      });
    } else {
      console.log('usuario registrado');
    }
  });
});

/* GET formulario de inicio de sesión para participantes */
router.get('/inicio-participante', function(req, res, next) {
  res.render('formularios/inicio-participante');
});

// get /inicio-secretaria

// get /inicio-comision

// get /inicio-director

// get /inicio-direccion-bd

module.exports = router;
