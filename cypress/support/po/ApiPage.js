const BasePage = require('../po/BasePage')

class ApiPage extends BasePage {
    get showButton() {
        /**
         * the same button would be for hiding
         */
        return cy.get('.expand-operation')
    }
}
module.exports = ApiPage