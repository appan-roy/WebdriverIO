class InternetHerokuAlertPage{

    getAlertButton(index){
        return $(`ul li:nth-child(${index}) button`)
    }

    clickOnAlertButton(index){
        this.getAlertButton(index).waitForDisplayed()
        this.getAlertButton(index).click()
    }

    get Result(){
        return $('#result')
    }

    getResultText(){
        this.Result.waitForDisplayed()
        return this.Result.getText()
    }

}

module.exports = new InternetHerokuAlertPage()