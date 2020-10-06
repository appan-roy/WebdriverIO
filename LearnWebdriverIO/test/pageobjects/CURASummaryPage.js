const { expect } = require("chai")

class CURASummaryPage{

    get FacilityText(){
        return $('//*[@id="facility"]')
    }

    validateFacilityText(expectedFacilityText){
        this.FacilityText.waitForExist()
        this.FacilityText.waitForDisplayed()
        const facilityText = this.FacilityText.getText()
        expect(facilityText).equals(expectedFacilityText + ' CURA Healthcare Center')
    }

    get HospitalAdmissionText(){
        return $('//*[@id="hospital_readmission"]')
    }

    validateHospitalAdmissionText(expectedChoice){
        this.HospitalAdmissionText.waitForExist()
        this.HospitalAdmissionText.waitForDisplayed()
        const choice = this.HospitalAdmissionText.getText()
        expect(choice).equals(expectedChoice)
    }

    get ProgramText(){
        return $('//*[@id="program"]')
    }

    validateProgramText(expectedProgram){
        this.ProgramText.waitForExist()
        this.ProgramText.waitForDisplayed()
        const program = this.ProgramText.getText()
        expect(program).equals(expectedProgram)
    }

    get VisitDateText(){
        return $('//*[@id="visit_date"]')
    }

    validateVisitDateText(expectedVisitDate){
        this.VisitDateText.waitForExist()
        this.VisitDateText.waitForDisplayed()
        const visitDate = this.VisitDateText.getText()
        expect(visitDate).equals(expectedVisitDate)
    }

    get CommentText(){
        return $('//*[@id="comment"]')
    }

    validateCommentText(expectedComment){
        this.CommentText.waitForExist()
        this.CommentText.waitForDisplayed()
        const comment = this.CommentText.getText()
        expect(comment).equals(expectedComment)
    }

    get Menu(){
        return $('.fa.fa-bars')
    }

    clickOnMenuIcon(){
        this.Menu.waitForExist()
        this.Menu.waitForDisplayed()
        this.Menu.waitForEnabled()
        this.Menu.waitForClickable()
        this.Menu.click()
    }

    get LogoutLink(){
        return $('//*[@id="sidebar-wrapper"]/ul/li[5]/a')
    }

    clickOnLogoutLink(){
        this.LogoutLink.waitForExist()
        this.LogoutLink.waitForDisplayed()
        this.LogoutLink.waitForEnabled()
        this.LogoutLink.waitForClickable()
        this.LogoutLink.click()
    }

}

module.exports = new CURASummaryPage()