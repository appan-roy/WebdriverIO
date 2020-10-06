const orangeLoginPg = require("../pageobjects/OrangeHRMLoginPage")
const orangeHomePg = require ("../pageobjects/OrangeHRMHomePage")
const lib = require('../lib/Library')
const data = require('../../testdata/orangeHrmData')

describe('Synchronization Suite', ()=>{

    before(()=>{
        browser.url('https://opensource-demo.orangehrmlive.com/')
        browser.maximizeWindow()
    })

    it('Verify orange hrm login', ()=>{

        lib.waitForElementToBeDisplayed(orangeLoginPg.Username)
        orangeLoginPg.typeUsername(data.username)

        lib.waitForElementToBeDisplayedInViewport(orangeLoginPg.Password)
        orangeLoginPg.typePassword(data.password)

        lib.waitForElementToBeClickable(orangeLoginPg.LoginButton)
        orangeLoginPg.clickOnLoginButton()

        lib.waitForElementToBeExists(orangeHomePg.WelcomeLink)
        orangeHomePg.clickOnWelcomeLink()

        lib.waitForElementToBeEnabled(orangeHomePg.LogoutLink)
        orangeHomePg.clickOnLogoutLink()

    })

})