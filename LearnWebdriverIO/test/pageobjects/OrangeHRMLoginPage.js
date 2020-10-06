const lib = require('../lib/Library')

class OrangeLoginPage{

    get Username(){
        return $('#txtUsername')
    }

    typeUsername(username){
        this.Username.clearValue()
        this.Username.setValue(username)
    }

    get Password(){
        return $('#txtPassword')
    }

    typePassword(password){
        this.Password.clearValue()
        this.Password.setValue(password)
    }

    get LoginButton(){
        return $('#btnLogin')
    }

    clickOnLoginButton(){
        this.LoginButton.click()
    }

    get ForgotPassword(){
        return $('=Forgot your password?')
    }

    clickOnForgotPassword(){
        this.ForgotPassword.click()
    }

    //POM design
    isForgotPasswordExists(){
        return lib.isElementExists(this.ForgotPassword)
    }

    loginToApp(uname, pwd){
        //type username
        lib.waitForElementToBeExists(this.Username)
        lib.waitForElementToBeDisplayed(this.Username)
        lib.waitForElementToBeEnabled(this.Username)
        lib.setTextValue(this.Username, uname)

        //type password
        lib.waitForElementToBeExists(this.Password)
        lib.waitForElementToBeDisplayed(this.Password)
        lib.waitForElementToBeEnabled(this.Password)
        lib.setTextValue(this.Password, pwd)

        //click on login button
        lib.waitForElementToBeExists(this.LoginButton)
        lib.waitForElementToBeDisplayed(this.LoginButton)
        lib.waitForElementToBeEnabled(this.LoginButton)
        lib.clickElement(this.LoginButton)
    }

}

module.exports = new OrangeLoginPage()