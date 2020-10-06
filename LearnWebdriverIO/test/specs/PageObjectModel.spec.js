const lib = require("../lib/Library")
const data = require('../../testdata/orangeHrmData')
const constants = require('../../testdata/constants')
const orangeLoginPg = require('../pageobjects/OrangeHRMLoginPage')
const orangeHomePg = require('../pageobjects/OrangeHRMHomePage')
const { assert } = require("chai")

describe('Page Object Model Suite', ()=>{

    before(()=>{
        lib.openApp(data.url)
    })

    it('Verify OrangeHRM login page title', ()=>{
        const login_title = lib.getPageTitle()
        assert.equal(login_title, constants.LOGIN_PAGE_TITLE, 'Login page title is not found')
    })

    it('Verify forgot password is present', ()=>{
        assert.equal(orangeLoginPg.isForgotPasswordExists(), true, 'Forgot password link not found')
    })

    it('Verify OrangeHRM login', ()=>{
        orangeLoginPg.loginToApp(data.username, data.password)
        assert.equal(orangeHomePg.isDashboardExists(), true, 'Dashboard is not appeared')
    })

    it('Verify OrangeHRM home page title', ()=>{
        const home_title = lib.getPageTitle()
        assert.equal(home_title, constants.HOME_PAGE_TITLE, 'Home page title is not found')
    })

    it('Verify OrangeHRM logout', ()=>{
        assert.equal(orangeHomePg.isWelcomeLinkExists(), true, 'Welcome link is not present')
        orangeHomePg.clickWelcomeLink()
        assert.equal(orangeHomePg.isLogoutLinkExists(), true, 'Logout link does not exist')
        orangeHomePg.clickLogoutLink()
        assert.equal(orangeLoginPg.isForgotPasswordExists(), true, 'Forgot password link not found')
    })

})