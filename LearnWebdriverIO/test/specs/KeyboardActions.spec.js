const { assert } = require('chai')
const lib = require('../lib/Library')

describe('Keyboard Actions Suite', ()=>{

    it('Verify keypress', ()=>{
        
        //navigate to app
        browser.url('http://the-internet.herokuapp.com/key_presses?')
        browser.maximizeWindow()

        //enter tab
        $('#target').setValue('Tab')

        //get result text
        const resultText = $('#result').getText()

        //assert
        assert.equal(resultText, 'You entered: TAB')

    })

})