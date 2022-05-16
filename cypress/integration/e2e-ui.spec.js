const { base, login } = require('../support/po/PageMap')
describe.skip('Тестирования возможности соединения', () => {
    it('Алгоритм проверки соединения с веб-приложением', () => {
        cy.log('Установка соединения с веб-приложением')
        base.openPage('https://reportportal.io/')
        cy.log('Проверка на совпадение адреса')
        base.url().should('include', 'reportportal.io')
    })
})

describe('Тестирование возможностей авторизации', () => {
    beforeEach(() => {
        cy.log('Установка соединения с веб-приложением')
        base.openPage('https://demo.reportportal.io/ui/#login')
        cy.log('Проверка на совпадение адреса')
        base.url().should('include', 'reportportal.io')
    })
    it('Алгоритм проверки возможности авторизации через сторонний сервис GitHub.com', () => {
        cy.log('Проверка на существование поля "Логин"')
        login.loginField.should('be.visible')
        cy.log('Команда написания в поле "Логин"')
        login.loginField.clear()
        login.loginField.type('default')
        cy.log('Проверка на существование поля "Пароль"')
        login.passwordField.should('be.visible')
        cy.log('Команда написания в поле "Пароль"')
        login.passwordField.clear()
        login.passwordField.type('1q2w3e')
        cy.log('Нажатие на кнопку "Login"')
        login.loginButton.click()
        cy.log('Проверка на совпадение адреса после перехода')
        base.url().should('include', 'personal')
    })
})