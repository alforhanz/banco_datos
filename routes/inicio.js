var express = require('express');
var router = express.Router();
var passport = require('passport');

const {Aspirante} = require('../database/sequelize.js');

/* GET página de inicio */
router.get('/', function(req, res, next) {
  res.render('inicio', { title: 'Inicio' });
});

/* GET formulario de registro para participantes */
router.get('/registro-aspirante', function(req, res, next) {
  var messages = req.flash('error');
  res.render('formularios/registro-aspirante', {messages: messages});
});

/* POST formulario de registro para participantes */
router.post('/registro-aspirante', passport.authenticate('registro-aspirante', {
  successRedirect: '/inicio-sesion',
  failureRedirect: '/registro-aspirante',
  failureFlash: true
}));

/* GET formulario de inicio de sesión */
router.get('/inicio-sesion', function(req, res, next) {
  var messages = req.flash('error');
  res.render('formularios/inicio-sesion', {messages: messages});
});

/* POST formulario de inicio de sesión */
router.post('/inicio-sesion', passport.authenticate('inicio-sesion', {
  successRedirect: '/aspirante/inicio',
  failureRedirect: '/inicio-sesion',
  failureFlash: true
}));

// get /inicio-secretaria

// get /inicio-comision

// get /inicio-director

// get /inicio-direccion-bd

module.exports = router;
