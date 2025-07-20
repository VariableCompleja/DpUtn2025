var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


require('dotenv').config();
const{sql, config}=require('./models/bd');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//pruebas consultas

async function testConnectionWindowsAuth() {
  try {
    // Usar la configuración y el objeto sql importados de bd.js
    await sql.connect(config);
    console.log('¡Conexión exitosa a SQL Server con Autenticación de Windows usando msnodesqlv8!');

    // Ejemplo de consulta
    // Asegúrate de que 'yourTableName' exista en tu base de datos
    const result = await sql.query`SELECT TOP 10 * FROM Templeados;`;
    console.dir(result.recordset);

  } catch (err) {
    console.error('Error al conectar a SQL Server con Autenticación de Windows:', err);
    console.error('Detalles del error:', err.message);
    if (err.originalError) {
        console.error('Error original (msnodesqlv8/Tedious):', err.originalError.message);
    }
  } finally {
    // Cierra la conexión. En una aplicación real, usarías un pool para gestionar esto.
    sql.close();
  }
}

// Llama a la función de prueba
testConnectionWindowsAuth();
//fin pruebas

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
