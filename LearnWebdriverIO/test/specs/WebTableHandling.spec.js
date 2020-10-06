const { assert } = require('chai')
const practicePg = require('../pageobjects/TestAutomationPracticePage')

describe('Web Table Handling Suite', ()=>{

    before(()=>{
        browser.url('http://testautomationpractice.blogspot.com/')
        browser.maximizeWindow()
    })

    it('Web table data scraping', ()=>{

        for (let i = 2; i <= practicePg.TableRowsCount; i++) {
            
            for (let j = 1; j <= practicePg.TableColumnsCount; j++) {
                
                let tableData = practicePg.getTableData(i, j)

                console.log("Table data is : "+tableData);

            }

        }

    })

    it('Verify the author of the book Master in JS', ()=>{

        for (let i = 2; i <= practicePg.TableRowsCount; i++) {
            
            let bookName = practicePg.getTableData(i, 1)
            
            if(bookName === 'Master in JS'){
                let authorName = practicePg.getTableData(i, 2)
                assert.equal(authorName, 'Amit')
            }

        }

    })

    it('Verify the price of the book Learn JS', ()=>{

        for (let i = 2; i <= practicePg.TableRowsCount; i++) {
            
            let bookName = practicePg.getTableData(i, 1)
            
            if(bookName === 'Learn JS'){
                let price = practicePg.getTableData(i, 4)
                assert.equal(price, '300')
            }

        }

    })

})