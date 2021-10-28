const express = require('express')
const SiteController = require('../controllers/SiteController')
const router = express.Router()

/* GET home */
router.get('/', SiteController.homePage)

/* GET OUT */
router.get('/logout', SiteController.doLogout)

/* GET login */
router.get('/login', SiteController.loginPage)

/* POST login */
router.post('/login', SiteController.doLogin)

/* GET cadastro */
router.get('/cadastro', SiteController.cadastroPage)

/* POST cadastro */
router.post('/cadastro', SiteController.doRegister)

/* GET sucesso */
router.get('/sucess', SiteController.sucessLogin)

module.exports = router;
