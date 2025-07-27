var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login', { //va a buscar login.hbs
    layout: 'admin/layout'
  });
});

/*cierra el login*/
router.get('/logout', function(req,res, next){
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

/*procesa el formulario */
router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;
    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

    if (data != undefined) {
      req.session.id_usuario = data.TId;
      req.session.nombre = data.Tusuario;
      res.redirect('/admin/novedades');
    }
    else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
}
);

module.exports = router;