const orangeLoginPg = require("../pageobjects/OrangeHRMLoginPage")
const orangeHomePg = require ("../pageobjects/OrangeHRMHomePage")
const lib = require('../lib/Library')

describe('Mouse Actions Suite', ()=>{

    it('Verify mouse hover', ()=>{
        
        //navigate to app
        browser.url('https://opensource-demo.orangehrmlive.com/')
        browser.maximizeWindow()

        //enter username
        orangeLoginPg.typeUsername('Admin')

        //enter password
        orangeLoginPg.typePassword('admin123')

        //click on login button
        orangeLoginPg.clickOnLoginButton()

        //move to admin tab
        lib.moveToElement(orangeHomePg.AdminTab)

        //move to user management tab
        lib.moveToElement(orangeHomePg.UserMgmtLink)

        //click on users link
        lib.clickElement(orangeHomePg.UsersLink)

        //click on welcome link
        orangeHomePg.clickOnWelcomeLink()

        //click on logout link
        orangeHomePg.clickOnLogoutLink()

    })

    it('Verify drag and drop', ()=>{

        browser.url('https://jqueryui.com/resources/demos/droppable/default.html')
        browser.maximizeWindow()

        const sourceElement = $('#draggable')
        const targetElement = $('#droppable')

        sourceElement.dragAndDrop(targetElement)

        browser.pause(2000)

    })

    it('Verify scroll into view', ()=>{

        browser.url('http://classic.crmpro.com/')
        browser.maximizeWindow()

        const chatbotCross = $('//*[@id="intercom-container"]/div/div/div[1]/div/div/span')

        if(chatbotCross.isDisplayed()){
            chatbotCross.click()
        }

        const forgotPasswordLink = $('=Forgot Password?')   //link text
        console.log(forgotPasswordLink.isDisplayedInViewport());

        forgotPasswordLink.scrollIntoView()
        console.log(forgotPasswordLink.isDisplayedInViewport());

        lib.moveToElement(forgotPasswordLink)
        forgotPasswordLink.click()

    })

})