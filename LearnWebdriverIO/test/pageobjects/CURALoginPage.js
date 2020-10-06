class CURALoginPage{

    get MakeAppointmentButton(){
        return $('#btn-make-appointment')
    }

    clickOnMakeAppointmentButton(){
        this.MakeAppointmentButton.waitForExist()
        this.MakeAppointmentButton.waitForDisplayed()
        this.MakeAppointmentButton.waitForEnabled()
        this.MakeAppointmentButton.waitForClickable()
        this.MakeAppointmentButton.click()
    }

    get DemoUsername(){
        return $('//*[@id="login"]/div/div/div[2]/form/div[1]/div[1]/div/div/input')
    }

    get getDemoUsernameText(){
        this.DemoUsername.waitForExist()
        this.DemoUsername.waitForDisplayed()
        return this.DemoUsername.getAttribute('value')
    }

    get DemoPassword(){
        return $('//*[@id="login"]/div/div/div[2]/form/div[1]/div[2]/div/div/input')
    }

    get getDemoPasswordText(){
        this.DemoPassword.waitForExist()
        this.DemoPassword.waitForDisplayed()
        return this.DemoPassword.getAttribute('value')
    }

    get Username(){
        return $('#txt-username')
    }

    enterUsername(username){
        this.Username.waitForExist()
        this.Username.waitForDisplayed()
        this.Username.clearValue()
        this.Username.setValue(username)
    }

    get Password(){
        return $('#txt-password')
    }

    enterPassword(password){
        this.Password.waitForExist()
        this.Password.waitForDisplayed()
        this.Password.clearValue()
        this.Password.setValue(password)
    }

    get LoginButton(){
        return $('#btn-login')
    }

    clickOnLoginButton(){
        this.LoginButton.waitForExist()
        this.LoginButton.waitForDisplayed()
        this.LoginButton.waitForEnabled()
        this.LoginButton.waitForClickable()
        this.LoginButton.click()
    }

}

module.exports = new CURALoginPage()