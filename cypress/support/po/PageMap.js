const BasePage = require('../po/BasePage')
const LoginPage = require('./LoginPage')

module.exports = {
    base: new BasePage(),
    login: new LoginPage(),
}