const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, 
  { host: process.env.DB_HOST, dialect: process.env.DB_DIALECT }
);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports.connection = sequelize;

// No Requiere
module.exports.Aspirante = require('../models/aspirante.js')(sequelize, Sequelize);
module.exports.Sede = require('../models/sede.js')(sequelize, Sequelize);
module.exports.Comisionado = require('../models/comisionado.js')(sequelize, Sequelize);
module.exports.Ejecutoria = require('../models/ejecutoria.js')(sequelize, Sequelize);
module.exports.ExperienciaOtras = require('../models/experienciaOtras.js')(sequelize, Sequelize);
module.exports.ExperienciaUP = require('../models/experienciaUP.js')(sequelize, Sequelize);
module.exports.Administrador = require('../models/administrador.js')(sequelize)(Sequelize);

// Requiere Aspirante, Area
module.exports.Antecedente = require('../models/antecedente.js')(sequelize, Sequelize, module.exports.Aspirante);

// Requiere Sede
module.exports.Facultad = require('../models/facultad.js')(sequelize, Sequelize, module.exports.Sede);

// Requiere Facultad
module.exports.Departamento = require('../models/departamento.js')(sequelize, Sequelize, module.exports.Facultad);

// Requiere Departamento
module.exports.Area = require('../models/area.js')(sequelize, Sequelize, module.exports.Departamento);

// Requiere Comisionado, Area
module.exports.ComisionadoArea = require('../models/area.js')(sequelize, Sequelize, module.exports.Comisionado, module.exports.Area);

// Requiere Facultad
module.exports.Director = require('../models/area.js')(sequelize, Sequelize, module.exports.Facultad);

// Requiere Departamento
module.exports.Secretario = require



module.exports.Evaluacion = require('../models/evaluacion.js')(sequelize, Sequelize);
module.exports.ExperienciaAO = require('../models/experienciaAO.js')(sequelize, Sequelize);
module.exports.ExperienciaAUP = require('../models/experienciaAUP.js')(sequelize, Sequelize);
module.exports.ExperienciaP = require('../models/experienciaProfesional.js')(sequelize, Sequelize);

module.exports.Oferta = require('../models/oferta.js')(sequelize, Sequelize);
module.exports.Participacion = require('../models/participacion.js')(sequelize, Sequelize);


module.exports.TipoEjecutoria = require('../models/tipoEjecutoria.js')(sequelize, Sequelize);
module.exports.TipoProfesor = require('../models/tipoProfesor.js')(sequelize, Sequelize);
module.exports.TipoTOE = require('../models/tipoTOE.js')(sequelize, Sequelize);
module.exports.TitulosOE = require('../models/titulosOE.js')(sequelize, Sequelize);
