class Library{

    //move to element
    moveToElement(element){
        element.waitForDisplayed()
        element.moveTo()
    }

    //click element
    clickElement(element){
        element.waitForDisplayed()
        element.click()
    }

    //set text
    setTextValue(element, text){
        element.waitForDisplayed()
        element.clearValue()
        element.setValue(text)
    }

    //get text
    getTextValue(element){
        element.waitForDisplayed()
        return element.getText()
    }

    //get page title
    getPageTitle(){
        return browser.getTitle()
    }

    openApp(appUrl){
        browser.url(appUrl)
        browser.maximizeWindow()
    }

    isElementExists(element){
        return element.isExisting()
    }

    isElementDisplayed(element){
        return element.isDisplayed()
    }

    isElementDisplayedInViewport(element){
        return element.isDisplayedInViewport()
    }

    isElementEnabled(element){
        return element.isEnabled()
    }

    isElementClickable(element){
        return element.isClickable()
    }

    isElementSelected(element){
        return element.isSelected()
    }

    //wait until
    waitForElementToBeExists(element){
        browser.waitUntil(()=>{
            return element.isExisting() === true
        }, 5000, 'Element is not existing within 5 seconds')
    }

    waitForElementToBeDisplayed(element){
        browser.waitUntil(()=>{
            return element.isDisplayed() === true
        }, 5000, 'Element is not displayed within 5 seconds')
    }

    waitForElementToBeDisplayedInViewport(element){
        browser.waitUntil(()=>{
            return element.isDisplayedInViewport() === true
        }, 5000, 'Element is not displayed in viewport within 5 seconds')
    }

    waitForElementToBeEnabled(element){
        browser.waitUntil(()=>{
            return element.isEnabled() === true
        }, 5000, 'Element is not enabled within 5 seconds')
    }

    waitForElementToBeClickable(element){
        browser.waitUntil(()=>{
            return element.isClickable() === true
        }, 5000, 'Element is not clickable within 5 seconds')
    }

}

module.exports = new Library()