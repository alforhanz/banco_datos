var passport = require('passport');
const {Usuario} = require('../database/sequelize.js');
var LocalStrategy =  require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

function generateHash (value) {
  return bcrypt.hashSync(value);
}

function compareHash(value, hash) {
  return bcrypt.compareSync(value, hash) ? true : false
}

passport.serializeUser((user, done) => {
  done(null, user.id, {message: user.id});
});

passport.deserializeUser((id, done) => {
  Usuario.findById(id).then((result) => {
    if (result) {
      done(null, result.get(), {message: result.get()});
    } else {
      done(result.errors, null);
    }
  });
});


// Singup Stragtegy  for Aspirantes
passport.use('registro-aspirante', new LocalStrategy(

{
  usernameField: 'cedula',
  passwordField: 'contrasenia',
  passReqToCallback: true // allows us to pass back the entire request to the callback
},

function (req, ced, pass, done) {

  Usuario.findOne({ where: {cedula: ced}, attributes: ['id', 'cedula'] })
  .then(result => {
    if (result) {
      console.log('buscando cedula');
      return done(null, false, {message: 'La cédula ya está registrada'});
    }

    const User = Usuario.build({
      tipoUsuario: 'ASPIRANTE',
      cedula: ced,
      contrasenia: generateHash(pass),
      nombres: req.body.nombres,
      apellidos: req.body.apellidos,
      correo: req.body.correo,
      telFijo: req.body.telFijo,
      telCelular: req.body.telCelular,
      direccion: req.body.direccion
    })
    .save()
    .then(result => { 
      console.log('registro creado');
      return done(null, result.get()) 
    })
    .catch(err => {
      console.log('error en la db al registar el usuario');
      return done(null, false, {
        message: 'Error al registrar el usuario, inténtelo de nuevo'
      });
    });

  });

}

));


// Singin Strategy for Aspirantes
passport.use('inicio-sesion', new LocalStrategy(

{
  usernameField: 'cedula',
  passwordField: 'contrasenia',
  passReqToCallback: true
},

function (req, ced, pass, done) {
  Usuario.findOne({ where: {cedula: ced} }).then(result => {
    if (!result) {
      return done(null, false, {message: 'Este usuario no está registrado'})
    }

    if (!compareHash(pass, result.dataValues.contrasenia)) {
      return done(null, false, {message: 'La contraseña es incorrecta'})
    }

    return done(null, result.dataValues);


  });
}

));