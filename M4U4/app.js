var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//M4U4 inicio
var session = require('express-session');
//M4U4 fin

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { title } = require('process');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//M4U4 inicio
app.use(session({
  secret: 'mpanjdnjfnnbgnrngjbormgeito',
  resave: false,
  saveUninitialized: true
}));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get('/', function (req, res) { //barra sola es local host3000
  var conocido = Boolean(req.session.nombre);
  var contador=req.session.contador||0;

  if(conocido){
    if(contador==0){
      req.session.contador=contador;
    }
    else{
      req.session.contador=contador-1;
    }
  }
  else{
    contador++;
    req.session.contador=contador;
  }
  
  res.render('index', { //muestra index.hbs
    title: 'Sesiones en Express.js',
    conocido: conocido,
    nombre: req.session.nombre,
    contador:req.session.contador
  });
});

app.post('/ingresar', function (req, res) { //metodo que captura datos
  //acá abajo >> tenes dato? hace esto...
  if (req.body.nombre) {
    req.session.nombre = req.body.nombre;
  }
  res.redirect('/');
});

app.get('/salir', function (req, res) {
  req.session.destroy(function(){
    res.redirect('/');//vuelve a inicio
  });//rompe la variable de sesion
});
//M4U4 fin


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
