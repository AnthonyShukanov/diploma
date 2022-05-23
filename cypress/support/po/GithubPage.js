const BasePage = require('../po/BasePage')

class GithubPage extends BasePage {
    alertMessage() {
        return cy.get('body')
    }
    get loginField() {
        return cy.get('input[name*=login]')
    }
    get passwordField() {
        return cy.get('input[name*=password]')
    }
    get signInButton() {
        return cy.get('input[type*=submit]')
    }
}
module.exports = GithubPage