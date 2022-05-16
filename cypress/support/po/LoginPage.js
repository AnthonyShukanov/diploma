const BasePage = require('../po/BasePage')

class LoginPage extends BasePage {
    get loginField() {
        return cy.get('input[placeholder*=Login]')
    }
    get passwordField() {
        return cy.get('input[placeholder*=Password]')
    }
    get loginButton() {
        return cy.get('button[type*=submit]')
    }
}
module.exports = LoginPage