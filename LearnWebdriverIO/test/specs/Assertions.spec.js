const { expect } = require("chai")

describe('Assertion Suite', ()=>{

    before(()=>{
        browser.url("https://katalon-demo-cura.herokuapp.com/")
        browser.maximizeWindow()
    })

    it('Verify home page header text', ()=>{
        const homeHeader = $('.//h1').getText()
        expect(homeHeader).equals('CURA Healthcare Service')
    })

    it('Verify login page url', ()=>{
        $('#btn-make-appointment').click()
        //expect(browser.getUrl()).equals(`${browser.options.baseUrl}profile.php#login`)    //if baseUrl is provided in wdio.conf.js
        expect(browser.getUrl()).equals('https://katalon-demo-cura.herokuapp.com/profile.php#login')
    })

    it('Verify login page header text', ()=>{
        const loginHeader = $('.//h2').getText()
        expect(loginHeader).equals('Login')
    })

})