## Antecedentes
* Identificador de los registros en la tabla Antecedentes.
* Llave foránea de la tabla Usuario, que permite identificar la relación 1:M que tiene cada aspirante con los antecedentes de contrataciones en la universidad.
* Llave foránea de la tabla Areas, que permite identificar la relación 1:M que tiene cada área con los antecedentes de contrataciones en la universidad.
* Contiene el año del antecedente de contratación.
* Contiene el semestre en que se dio el antecedente de contratación.
* Contiene el tipo de profesor (Especial o Asistente) del antecedente de contratación.
* Contiene el código del profesor.
* Contiene la dedicación de tiempo del profesor (Parcial o Completo).
* Campo booleano para saber si el profesor posee estudios de docencia superior.
* Campo tipo JSON que almacena un objeto de JavaScript en formato string; este contiene las certificaciones de evaluación satisfactoria del profesor, así como sus respectivos años.

## Areas
* Identificador de los registros en la tabla Areas.
* Llave foránea de la tabla Departamentos, que permite identificar la relación 1:M que tiene cada departamento con las áreas.
* Contiene el código de cada aŕea.
* Contiene el nombre de cada área.

## Departamentos
* Identificador de los registros en la tabla Facultades.
* Llave foránea de la tabla Facultades, que permite identificar la relación 1:M que tiene cada facultad con los departamentos.
* Contiene el código de cada departamento.
* Contiene el nombre de cada departamento.

## Ejecutorias
* Identificador de los registros en la tabla Ejecutorias.
* Contiene el nombre de cada tipo de ejecutoria.

## EvaluacionesProfesor
* Identificador de los registros en la tabla EvaluacionesProfesor.
* Llave foránea de la tabla Participaciones, que permite identificar la relación 1:M que tiene cada participación con las Evaluaciones excelentes de cada profesor.
* Llave foránea de la tabla Usuarios, que almacena el identificador del usuario de tipo comisionado, que se encarga de evaluar y ponderar las evaluaciones.
* Contiene el número de certificación propio de cada evaluación.
* Contiene la descripción de la evaluación.
* Campo para evaluar según conocimiento.

## ExperienciasOtras
* Identificador de los registros en la tabla ExperienciasOtras.
* Contiene el nombre de cada tipo de experiencia profesional en otras universidades.

## ExperienciasProfesionales
* Identificador de los registros en la tabla ExperienciasProfesionales.
* Llave foránea de la tabla Participaciones, que permite identificar la relación 1:M que tiene cada participación con las experiencias profesionales de cada profesor.
* Llave foránea de la tabla Usuarios, que almacena el identificador del usuario de tipo comisionado, que se encarga de evaluar y ponderar las experiencias profesionales.
* Contiene el número de certificación propio de cada experiencia.
* Contiene el nombre de la institución donde se obtuvo la experiencia.
* Contiene el cargo desempeñado.
* Contiene el año en que se realizó.
* Campo para evaluar según conocimiento.
* Campo para evaluar según afín.
* Campo para evaluar según cultural.
* Campo para agregar observaciones a la hora de evaluar.

## ExperienciasUp
* Identificador de los registros en la tabla ExperienciasUp.
* Contiene el nombre de cada tipo de experiencia profesional en la universidad.

## Facultades
* Identificador de los registros en la tabla Facultades.
* Llave foránea de la tabla Sedes, que permite identificar la relación 1:M que tiene cada sede con las facultades.
* Contiene el código de cada facultad.
* Contiene el nombre de cada facultad.

## Ofertas
* Identificador de los registros en la tabla Ofertas.
* Llave foránea de la tabla Areas, que permite identificar la relación 1:M que tiene cada área con las ofertas.
* Contiene el tipo de profesor de la oferta (Especial o Asistente).
* Campo booleano que determina si la oferta es de tipo extraordinario.

## Participaciones
* Identificador de los registros en la tabla Participaciones.
* Llave foránea de la tabla Usuarios, que permite identificar la relación 1:M que tiene cada aspirante con las participaciones.
* Llave foránea de la tabla ofertas, que representa la oferta a la que pertenece esa participación.
* Llave foránea de la tabla Usuarios, que almacena el identificador del usuario de tipo secretario, que se encarga de evaluar y habilitar la participación.
* Campo booleano usado para establecer si la participación está habilitadada.
* Contiene el estado de la participación (Secretaría, Comisionados, Decano, Aprovación, Listo).
* Campo para agregar observaciones a la participación.
* Campo tipo JSON que almacena un objeto de JavaScript en formato string; este contiene los documentos adjuntados a la solicitud.
* Contiene la fecha de registro de la solicitud.
* Contiene la fecha de la última modificación de la solicitud.
* Contiene la fecha de habilitación de la solicitud.

## ParticipacionesEjecutorias
* Identificador de los registros en la tabla ParticipacionesEjecutorias.
* Llave foránea de la tabla Participaciones, que permite identificar la relación N:M que tienen las participaciones con las ejecutorias.
* Llave foránea de la tabla Ejecutorias, que permite identificar la relación N:M que tienen las ejecutorias con las participaciones.
* Llave foránea de la tabla Usuarios, que almacena el identificador del usuario de tipo comisionado, que se encarga de evaluar y ponderar las ejecutorias.
* Contiene el número de certificación propio de cada ejecutoria.
* Contiene la descripción de la ejecutoria.
* Campo para evaluar según conocimiento.
* Campo para evaluar según afín.
* Campo para evaluar según cultural.
* Campo para agregar observaciones a la hora de evaluar.

## ParticipacionesExperienciasOtras
* Identificador de los registros en la tabla ParticipacionesExperienciasOtras.
* Llave foránea de la tabla Participaciones, que permite identificar la relación N:M que tienen las participaciones con las experiencias profesionales en otras universidades.
* Llave foránea de la tabla ExperienciasOtras, que permite identificar la relación N:M que tienen las experiencias profesionales en otras universidades con las participaciones.
* Llave foránea de la tabla Usuarios, que almacena el identificador del usuario de tipo comisionado, que se encarga de evaluar y ponderar las experiencias profesionales.
* Contiene el número de certificación propio de cada experiencia profesional.
* Campo para evaluar según conocimiento.
* Campo para evaluar según afín.
* Campo para evaluar según cultural.
* Campo para agregar observaciones a la hora de evaluar.

## ParticipacionesExperienciasUp
* Identificador de los registros en la tabla ParticipacionesExperienciasUp.
* Llave foránea de la tabla Participaciones, que permite identificar la relación N:M que tienen las participaciones con las experiencias profesionales en la universidad.
* Llave foránea de la tabla ExperienciasOtras, que permite identificar la relación N:M que tienen las experiencias profesionales en la universidad con las participaciones.
* Llave foránea de la tabla Usuarios, que almacena el identificador del usuario de tipo comisionado, que se encarga de evaluar y ponderar las experiencias profesionales.
* Contiene el número de certificación propio de cada experiencia profesional.
* Campo para evaluar según conocimiento.
* Campo para evaluar según afín.
* Campo para evaluar según cultural.
* Campo para agregar observaciones a la hora de evaluar.

## ParticipacionesTitulos
* Identificador de los registros en la tabla ParticipacionesTitulos.
* Llave foránea de la tabla Participaciones, que permite identificar la relación N:M que tienen las participaciones con los títulos y otros estudios.
* Llave foránea de la tabla ExperienciasOtras, que permite identificar la relación N:M que tienen los títulos y otros estudios con las participaciones.
* Llave foránea de la tabla Usuarios, que almacena el identificador del usuario de tipo comisionado, que se encarga de evaluar y ponderar los títulos y otros estudios.
* Contiene el número de certificación propio de cada título u otro estudio.
* Contiene la descripción del título u otro estudio.
* Campo para evaluar según conocimiento.
* Campo para evaluar según afín.
* Campo para evaluar según cultural.
* Campo para agregar observaciones a la hora de evaluar.

## Sedes
* Identificador de los registros en la tabla Sedes.
* Contiene el código de cada sede.
* Contiene el nombre de cada sede.

## Titulos
* Identificador de los registros en la tabla Titulos.
* Tipo de título u otro estudio.

## Usuarios
* Identificador de los registros en la tabla Usuarios.
* Contiene el tipo de usuario (Aspirante, Secretario, Comisionado, Director, Administrador).
* Contiene el número de cédula de cada usuario, y  este permite identificarlo de manera única.
* Contiene la contraseña (encriptada) del usuario.
* Contiene los nombres del usuario.
* Contiene los apellidos del usuario.
* Contiene el correo electrónico.
* Contiene el teléfono fijo.
* Contiene el teléfono celular.
* Contiene la dirección del aspirante.
* Contiene la fecha de registro del usuario.
* Contiene la fecha de la última modificación del usuario.

## UsuariosAreas
* Identificador de los registros en la tabla UsuariosAreas.
* Llave foránea de la tabla Usuarios, que permite identificar la relación N:M que tienen los usuarios con las áreas (preferiblemente los comisionados).
* Llave foránea de la tabla Areas, que permite identificar la relación N:M que tienen las áreas con los usuarios.

## UsuariosDepartamentos
* Identificador de los registros en la tabla Departamentos.
* Llave foránea de la tabla Usuarios, que permite identificar la relación N:M que tienen los usuarios con los departamentos (preferiblemente los secretarios).
* Llave foránea de la tabla Deparatamentos, que permite identificar la relación N:M que tienen los departamentos con los usuarios.

## UsuariosFacultades
* Identificador de los registros en la tabla Facultades.
* Llave foránea de la tabla Usuarios, que permite identificar la relación N:M que tienen los usuarios con las facultades (preferiblemente los directores/decanos).
* Llave foránea de la tabla Facultades, que permite identificar la relación N:M que tienen las facultades con los usuarios.

## UsuariosSedes
* Identificador de los registros en la tabla Sedes.
* Llave foránea de la tabla Usuarios, que permite identificar la relación N:M que tienen los usuarios con las sedes (preferiblemente los dirección de banco de datos).
* Llave foránea de la tabla Sedes, que permite identificar la relación N:M que tienen las sedes con los usuarios.