class BasePage {
    openPage(url) {
        return cy.visit(url)
    }
    url() {
        return cy.url()
    }
}

module.exports = BasePage