class BlazeHomePage{

    //the below are getter methods, it doesn't allow parameters
    get header(){
        return $('ul.list-nav-links')
    }

    get headerChildElements(){
        return this.header.$$('li');
    }

    get headerChildElementsText(){
        return this.headerChildElements.filter(element =>{
            console.log(element.getText());
        })
    }

    get useCaseElements(){
        return $$('div#main_b_footer_second_block>ul>li')
    }

    get useCaseElementsText(){
        return this.useCaseElements.filter(element =>{
            console.log(element.getText());
        })
    }

    //non getter methods allow parameters
    getSpecificChildElement(index){
        return this.header.$(`li:nth-child(${index})`)
    }

    getSpecificChildElementText(index){
        return this.getSpecificChildElement(index).getText()
    }

    get mainHeading(){
        return $('h2.home-features_title')
    }

    get jmeterLink(){
        return $("//a[text()='JMeter']")
    }

    get productLink(){
        return $("//a[text()='PRODUCT']")
    }

    clickOnProductLink(){
        if(this.productLink.isClickable()){
            this.productLink.click()
        }
    }

}

module.exports = new BlazeHomePage()