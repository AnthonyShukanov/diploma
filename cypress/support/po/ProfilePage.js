const BasePage = require('../po/BasePage')

class ProfilePage extends BasePage {
    get changePasswordButton() {
        return cy.get('[class*=ghostButton]')
    }
}
module.exports = ProfilePage