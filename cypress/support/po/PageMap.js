const BasePage = require('./BasePage')
const LoginPage = require('./LoginPage')
const GithubPage = require('./GithubPage')
const DashboardPage = require('./DashboardPage')
const ApiPage = require('./ApiPage')
const ProfilePage = require('./ProfilePage')

module.exports = {
    base: new BasePage(),
    login: new LoginPage(),
    github: new GithubPage(),
    dashboard: new DashboardPage(),
    api: new ApiPage(),
    profile: new ProfilePage()
}