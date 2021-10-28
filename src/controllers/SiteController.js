const AuthService = require('../services/auth.service');
const UserService = require('../services/users.service');


class SiteController {

  static homePage(req, res) {
    res.render('index', {
      title: 'Home',
   })
  }

  static loginPage(req, res) {
    res.render('login', {
      title: 'Login',
      isLoginPage: true
    })
  }

  static cadastroPage(req, res) {
    res.render('cadastro', {
      title: 'Cadastro',
      isCadastroPage: true
    })
  }

  static sucessLogin(req, res) {
    res.render('sucess', {
      title: 'Sucesso',
      isCadastroPage: true
    })
  }

  static async doRegister(req, res) {
    try {
      const newUser = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        state: req.body.state,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      const user = await UserService.create(newUser)

      req.startSession(user)
      res.redirect('sucess')

    } catch (err) {
      console.log(err)

      res.render('error', {
        title: 'Error',
        error: err.message
      })
    }
  }

  static async doLogin(req, res) {
    const { email, password } = req.body

    try {
      const user = await AuthService.authenticate(email, password)

      if (!user) {
        return res.render('error', {
          title: 'Erro',
          error: 'Usuário ou senha inválidos'
        })
      }

      req.startSession(user)
      res.redirect('sucess')
      
    } catch (err) {
      console.log(err)

      res.render('error', {
        title: 'Erro',
        error: 'Erro inesperado'
      })
    }

  }

  static doLogout(req, res) {
    req.session.destroy()
    res.redirect('/')
  }

}

module.exports = SiteController
