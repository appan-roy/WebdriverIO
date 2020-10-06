const orangeLoginPg = require("../pageobjects/OrangeHRMLoginPage")
const orangeHomePg = require ("../pageobjects/OrangeHRMHomePage")

describe('Orange HRM Suite', ()=>{

    it('Verify Orange HRM Login', ()=>{
        
        //navigate to app
        browser.url('https://opensource-demo.orangehrmlive.com/')
        browser.maximizeWindow()

        //enter username
        orangeLoginPg.typeUsername('Admin')

        //enter password
        orangeLoginPg.typePassword('admin123')

        //click on login button
        orangeLoginPg.clickOnLoginButton()

        //click on welcome link
        orangeHomePg.clickOnWelcomeLink()

        //click on logout link
        orangeHomePg.clickOnLogoutLink()

    })

})