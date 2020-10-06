const lib = require('../lib/Library')

class OrangeHomePage{

    get WelcomeLink(){
        return $('//*[@id="welcome"]')
    }

    clickOnWelcomeLink(){
        this.WelcomeLink.click()
    }

    get LogoutLink(){
        return $('//*[@id="welcome-menu"]/ul/li[2]/a')
    }

    clickOnLogoutLink(){
        this.LogoutLink.click()
    }

    get AdminTab(){
        return $('//*[@id="menu_admin_viewAdminModule"]/b')
    }

    get UserMgmtLink(){
        return $('//*[@id="menu_admin_UserManagement"]')
    }

    get UsersLink(){
        return $('//*[@id="menu_admin_viewSystemUsers"]')
    }

    get DashboardTab(){
        return $('//*[@id="menu_dashboard_index"]/b')
    }

    get DashboardHeader(){
        return $('//*[@id="content"]/div/div[1]/h1')
    }

    //POM design
    isDashboardExists(){
        return lib.isElementExists(this.DashboardTab)
    }

    isWelcomeLinkExists(){
        return lib.isElementExists(this.WelcomeLink)
    }

    isLogoutLinkExists(){
        return lib.isElementExists(this.LogoutLink)
    }

    clickWelcomeLink(){
        lib.waitForElementToBeExists(this.WelcomeLink)
        lib.waitForElementToBeDisplayed(this.WelcomeLink)
        lib.waitForElementToBeEnabled(this.WelcomeLink)
        lib.clickElement(this.WelcomeLink)
    }

    clickLogoutLink(){
        lib.waitForElementToBeExists(this.LogoutLink)
        lib.waitForElementToBeDisplayed(this.LogoutLink)
        lib.waitForElementToBeEnabled(this.LogoutLink)
        lib.clickElement(this.LogoutLink)
    }

}

module.exports = new OrangeHomePage()