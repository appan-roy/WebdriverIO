const { assert } = require('chai')
const herokuAlertPg = require('../pageobjects/InternetHerokuAlertPage')

describe('Alert Handling Suite', ()=>{

    before(()=>{
        browser.url('http://the-internet.herokuapp.com/javascript_alerts')
        browser.maximizeWindow()
    })

    it('Verify accept alert', ()=>{

        //click on alert button
        herokuAlertPg.clickOnAlertButton(1)

        browser.pause(2000)

        //capture alert text
        const alertText = browser.getAlertText()

        //assert
        assert.equal(alertText, 'I am a JS Alert')

        //accept the alert
        browser.acceptAlert()

        browser.pause(2000)

        //capture result text
        const resultText = herokuAlertPg.getResultText()

        //assert
        assert.equal(resultText, 'You successfuly clicked an alert')

    })

    it('Verify dismiss alert', ()=>{

        //click on alert button
        herokuAlertPg.clickOnAlertButton(2)

        browser.pause(2000)

        //capture alert text
        const alertText = browser.getAlertText()

        //assert
        assert.equal(alertText, 'I am a JS Confirm')

        //dismiss the alert
        browser.dismissAlert()

        browser.pause(2000)

        //capture result text
        const resultText = herokuAlertPg.getResultText()

        //assert
        assert.equal(resultText, 'You clicked: Cancel')

    })

    it('Verify accept alert with text', ()=>{

        //click on alert button
        herokuAlertPg.clickOnAlertButton(3)

        browser.pause(2000)

        //capture alert text
        const alertText = browser.getAlertText()

        //assert
        assert.equal(alertText, 'I am a JS prompt')

        //send alert text
        browser.sendAlertText('this is an alert')

        //accept the alert
        browser.acceptAlert()

        browser.pause(2000)

        //capture result text
        const resultText = herokuAlertPg.getResultText()

        //assert
        assert.equal(resultText, 'You entered: this is an alert')

    })

})