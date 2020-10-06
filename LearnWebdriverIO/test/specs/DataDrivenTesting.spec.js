const curaLoginPg = require('../pageobjects/CURALoginPage')
const curaHomePg = require('../pageobjects/CURAHomePage')
const curaSummaryPg = require('../pageobjects/CURASummaryPage')
const data = require('../../testdata/curaData.json')
const config = require('../../testdata/curaConfig.json')
const lib = require('../lib/Library')

describe('Data Driven Suite', () => {

    before(() => {

        //open app
        lib.openApp(config.url)

    })

    it('Validate appointment booking in CURA Healthcare', () => {

        for (let i = 0; i < data.facility.length; i++) {

            //click on make appointment button
            curaLoginPg.clickOnMakeAppointmentButton()

            //enter username and password
            curaLoginPg.enterUsername(config.username)
            curaLoginPg.enterPassword(config.password)

            //click on login button
            curaLoginPg.clickOnLoginButton()

            //select facility
            curaHomePg.selectFacility(data.facility[i])

            //check hospital readmission
            curaHomePg.checkHospitalAdmission(data.hospital[i])

            //select healthcare program
            curaHomePg.selectProgram(data.healthProgram[i])

            //enter visit date
            curaHomePg.enterVisitDate(data.visitDate[i])

            //enter comment
            curaHomePg.enterComment(data.facility[i] + ' center booked')

            //click on book appointment
            curaHomePg.clickOnBookAppointmentButton()

            //validate facility
            curaSummaryPg.validateFacilityText(data.facility[i])

            //validate hospital readmission
            curaSummaryPg.validateHospitalAdmissionText(data.hospital[i])

            //validate program
            curaSummaryPg.validateProgramText(data.healthProgram[i])

            //validate visit date
            curaSummaryPg.validateVisitDateText(data.visitDate[i])

            //validate comment
            curaSummaryPg.validateCommentText(data.facility[i] + ' center booked')

            //click on menu icon
            curaSummaryPg.clickOnMenuIcon()

            //click on logout link
            curaSummaryPg.clickOnLogoutLink()

            //pause 2 seconds
            browser.pause(2000)

        }

    })

})