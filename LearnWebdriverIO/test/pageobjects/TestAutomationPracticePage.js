class TestAutomationPracticePage{

    get TableRows(){
        return $$(".//table[@name='BookTable']/tbody/tr")
    }

    get TableColumns(){
        return $$(".//table[@name='BookTable']/tbody/tr[1]/th")
    }

    get TableRowsCount(){
        return this.TableRows.length
    }

    get TableColumnsCount(){
        return this.TableColumns.length
    }

    getTableData(rowIndex, colIndex){
        return $(".//table[@name='BookTable']/tbody/tr["+rowIndex+"]/td["+colIndex+"]").getText()
    }

}

module.exports = new TestAutomationPracticePage()