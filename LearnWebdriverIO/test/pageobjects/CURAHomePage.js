class CURAHomePage{

    get Facility(){
        return $(".//select[@id='combo_facility']")
    }

    selectFacility(facilityName){
        this.Facility.waitForExist()
        this.Facility.waitForDisplayed()
        this.Facility.selectByVisibleText(facilityName + ' CURA Healthcare Center')
    }

    get HospitalAdmission(){
        return $('#chk_hospotal_readmission')
    }

    checkHospitalAdmission(choice){
        if(choice == 'Yes' || choice == 'yes'){
            this.HospitalAdmission.waitForExist()
            this.HospitalAdmission.waitForDisplayed()
            this.HospitalAdmission.waitForEnabled()
            this.HospitalAdmission.waitForClickable()
            this.HospitalAdmission.click()
        }
    }

    get MedicareProgram(){
        return $('#radio_program_medicare')
    }

    get MedicaidProgram(){
        return $('#radio_program_medicaid')
    }

    get NoneProgram(){
        return $('#radio_program_none')
    }

    selectProgram(programName){
        if(programName == 'Medicare' || programName == 'medicare'){
            this.MedicareProgram.waitForExist()
            this.MedicareProgram.waitForDisplayed()
            this.MedicareProgram.waitForEnabled()
            this.MedicareProgram.waitForClickable()
            this.MedicareProgram.click()
        }else if(programName == 'Medicaid' || programName == 'medicaid'){
            this.MedicaidProgram.waitForExist()
            this.MedicaidProgram.waitForDisplayed()
            this.MedicaidProgram.waitForEnabled()
            this.MedicaidProgram.waitForClickable()
            this.MedicaidProgram.click()
        }else{
            this.NoneProgram.waitForExist()
            this.NoneProgram.waitForDisplayed()
            this.NoneProgram.waitForEnabled()
            this.NoneProgram.waitForClickable()
            this.NoneProgram.click()
        }
    }

    get VisitDate(){
        return $('#txt_visit_date')
    }

    enterVisitDate(visitDate){
        this.VisitDate.waitForExist()
        this.VisitDate.waitForDisplayed()
        this.VisitDate.clearValue()
        this.VisitDate.setValue(visitDate)
    }

    get Comment(){
        return $('#txt_comment')
    }

    enterComment(comment){
        this.Comment.waitForExist()
        this.Comment.waitForDisplayed()
        this.Comment.clearValue()
        this.Comment.setValue(comment)
    }

    get BookAppointmentButton(){
        return $('#btn-book-appointment')
    }

    clickOnBookAppointmentButton(){
        this.BookAppointmentButton.waitForExist()
        this.BookAppointmentButton.waitForDisplayed()
        this.BookAppointmentButton.waitForEnabled()
        this.BookAppointmentButton.waitForClickable()
        this.BookAppointmentButton.click()
    }

}

module.exports = new CURAHomePage()