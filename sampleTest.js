const data = require('../test_data/data');
const page = require('../page_objects/page')
const loginPage = require('../page_objects/loginPage');
const tasksPage = require('../page_objects/tasksPage');
const createAccountPage = require('../page_objects/createAccount');
beforeAll(function () {
  page.openUrl()
})

describe("SignIn into the Site", function() {
    it("Enter application", function() {
        loginPage.clickLogin();
        expect(tasksPage.isAgendaViewDisplayed()).toBe(true);
    });

    it("Blank", function() {
        tasksPage.emailBlank();
        expect(tasksPage.isErrorMessageDisplayed()).toBe(true);
    });

    it("Real", function() {
        tasksPage.createTask(data.email);
        expect(createAccountPage.isAuthenticationPageDisplayed()).toBe(true);
    });

    it("form", function() {
        createAccountPage.fillForm(data.firstName, data.lastName, data.password, data.addressFirstName, data.addressLastName, data.company, data.address, data.addressDos, data.city, data.zip, data.additionalInfo, data.homePhone, data.mobilePhone, data.alias);
         });

});
