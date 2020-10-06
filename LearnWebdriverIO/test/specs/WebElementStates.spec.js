const blazeHomePg = require("../pageobjects/BlazeMeterHomePage")

describe('Web Element States Suite', ()=>{

    it('Verify Different Element States', ()=>{

        //navigate to app
        browser.url('https://www.blazemeter.com/')
        browser.maximizeWindow()

        //check main heading is existing
        blazeHomePg.mainHeading.isExisting()             //true

        //check main heading is displayed
        blazeHomePg.mainHeading.isDisplayed()            //true

        //check main heading is enabled
        blazeHomePg.mainHeading.isEnabled()              //true

        //check main heading is displayed in view port
        blazeHomePg.mainHeading.isDisplayedInViewport()  //true

        //check jmeter link is displayed in view port
        blazeHomePg.mainHeading.isDisplayedInViewport()  //false

        //click on product link if clickable
        blazeHomePg.clickOnProductLink()

    })

})