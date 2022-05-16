const BasePage = require('./BasePage')
const LoginPage = require('./LoginPage')
const GithubPage = require('./GithubPage')
const DashboardPage = require('./DashboardPage')

module.exports = {
    base: new BasePage(),
    login: new LoginPage(),
    github: new GithubPage(),
    dashboard: new DashboardPage()
}