const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'banco_datos',
  'root',
  'alexa', 
  { host: 'localhost', dialect: 'mysql' }
);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});


module.exports.connection = sequelize;


module.exports.Antecedente = require('../models/antecedente.js')(sequelize, Sequelize);
module.exports.Area = require('../models/area.js')(sequelize, Sequelize);

module.exports.Departamento = require('../models/departamento.js')(sequelize, Sequelize);

module.exports.Ejecutoria = require('../models/ejecutoria.js')(sequelize, Sequelize);
module.exports.EvaluacionProfesor =  require('../models/evaluacionProfesor.js')(sequelize, Sequelize);
module.exports.ExperienciaOtras = require('../models/experienciaOtras.js')(sequelize, Sequelize);
module.exports.ExperienciaProfesional = require('../models/experienciaProfesional.js')(sequelize, Sequelize);
module.exports.ExperienciaUP = require('../models/experienciaUP.js')(sequelize, Sequelize);
module.exports.Facultad = require('../models/facultad.js')(sequelize, Sequelize);
module.exports.Oferta = require('../models/oferta.js')(sequelize, Sequelize);
module.exports.Participacion = require('../models/participacion.js')(sequelize, Sequelize);
module.exports.Participacion_Ejecutoria = require('../models/participacion_ejecutoria.js')(sequelize, Sequelize);
module.exports.Participacion_ExperienciaOtras = require('../models/participacion_experienciaOtras.js')(sequelize, Sequelize);
module.exports.Participacion_ExperienciaUP = require('../models/participacion_experienciaUP.js')(sequelize, Sequelize);
module.exports.Participacion_Titulo = require('../models/participacion_titulo.js')(sequelize, Sequelize);

module.exports.Sede = require('../models/sede.js')(sequelize, Sequelize);
module.exports.Titulos = require('../models/titulo.js')(sequelize, Sequelize);

module.exports.Usuario = require('../models/usuario.js')(sequelize, Sequelize);
module.exports.Usuario_Area = require('../models/usuario_area.js')(sequelize, Sequelize);
module.exports.Usuario_Departamento = require('../models/usuario_departamento.js')(sequelize, Sequelize);
module.exports.Usuario_Facultad = require('../models/usuario_facultad.js')(sequelize, Sequelize);
module.exports.Usuario_Sede = require('../models/usuario_sede.js')(sequelize, Sequelize);