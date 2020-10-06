const curaLoginPg = require('../pageobjects/CURALoginPage')
const curaHomePg = require('../pageobjects/CURAHomePage')
const curaSummaryPg = require('../pageobjects/CURASummaryPage')

describe('CURA Healthcare Suite', ()=>{

    before(()=>{
        browser.url("https://katalon-demo-cura.herokuapp.com/")
        browser.maximizeWindow()
    })

    it('Validate login', ()=>{

        //click on make appointment button
        curaLoginPg.clickOnMakeAppointmentButton()

        //get username and password
        const uname = curaLoginPg.getDemoUsernameText
        const pwd = curaLoginPg.getDemoPasswordText

        //enter username and password
        curaLoginPg.enterUsername(uname)
        curaLoginPg.enterPassword(pwd)

        //click on login button
        curaLoginPg.clickOnLoginButton()

    })

    it('Validate appointment booking', ()=>{

        //select facility
        curaHomePg.selectFacility('Seoul')

        //check hospital readmission
        curaHomePg.checkHospitalAdmission('Yes')

        //select healthcare program
        curaHomePg.selectProgram('Medicaid')

        //enter visit date
        curaHomePg.enterVisitDate('05/10/2020')

        //enter comment
        curaHomePg.enterComment('Comment')

        //click on book appointment
        curaHomePg.clickOnBookAppointmentButton()

    })

    it('Validate appointment summary', ()=>{

        //validate facility
        curaSummaryPg.validateFacilityText('Seoul')

        //validate hospital readmission
        curaSummaryPg.validateHospitalAdmissionText('Yes')

        //validate program
        curaSummaryPg.validateProgramText('Medicaid')

        //validate visit date
        curaSummaryPg.validateVisitDateText('05/10/2020')

        //validate comment
        curaSummaryPg.validateCommentText('Comment')

        //click on menu icon
        curaSummaryPg.clickOnMenuIcon()

        //click on logout link
        curaSummaryPg.clickOnLogoutLink()

        //pause 2 seconds
        browser.pause(2000)

    })

})