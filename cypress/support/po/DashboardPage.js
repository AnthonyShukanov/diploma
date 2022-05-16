const BasePage = require('./BasePage')

class DashboardPage extends BasePage {
    get profileButton() {
        return cy.get('[alt*=avatar]')
    }
    get logoutButton() {
        return cy.get('[class*=userBlock]')
    }
}

module.exports = DashboardPage