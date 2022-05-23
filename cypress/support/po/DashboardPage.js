const BasePage = require('./BasePage')

class DashboardPage extends BasePage {
    get profileButton() {
        return cy.get('[alt*=avatar]')
    }
    get logoutButton() {
        return cy.get('[class*=userBlock]')
    }
    get apiButton() {
        return cy.get('[href*=api]')
    }
    get mainProfileButton() {
        return cy.get('[href*=user-profile][class*=userBlock]')
    }

}

module.exports = DashboardPage