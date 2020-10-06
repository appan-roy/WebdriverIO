const blazeHomePg = require("../pageobjects/BlazeMeterHomePage")

describe('Capture Text Suite', ()=>{

    it('Verify Get Text Using Findelements', ()=>{

        //navigate to app
        browser.url('https://www.blazemeter.com/')
        browser.maximizeWindow()

        //get header link texts - getter method
        blazeHomePg.headerChildElementsText;

        //get use cases link texts - getter method
        blazeHomePg.useCaseElementsText;

        //get 3rd header link text - non getter method
        console.log(blazeHomePg.getSpecificChildElementText(3))

    })

})