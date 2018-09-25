const actions = require('../base/actions');

function CreateAccount() {
  // Web elements for Register Form

  this.genderRadioButton = element(by.id('uniform-id_gender1'));
  this.firstNameTextBox = element(by.id('customer_firstname'));
  this.lastNameTextBox = element(by.id('customer_lastname'));
  this.passwordTextBox = element(by.id('passwd'));
  this.dayDropdown = element.all(by.id('days'));
  this.monthDropdown = element(by.id('months'));
  this.yearDropdown = element(by.id('years'));
  this.addressFirstNameTextBox = element(by.id('firstname'));
  this.addressLastNameTextBox = element(by.id('lastname'));
  this.companyTextBox = element(by.id('company'));
  this.addressTextBox = element(by.id('address1'));
  this.address2TextBox = element(by.id('address2'));
  this.cityTextBox = element(by.id('city'));
  this.stateDropdown = element(by.id('id_state'));
  this.zipTextBox = element(by.id('postcode'));
  this.countryDropdown = element(by.id('id_country'));
  this.additionalinformationTextBox = element(by.id('other'));
  this.homePhoneTextBox = element(by.id('phone'));
  this.mobilePhoneTextBox = element(by.id('phone_mobile'));
  this.aliasTextBox = element(by.id('alias'));
  this.registerButton = element(by.id('submitAccount'));
  /**
   * @description Function used to enter credentials for Login then click on Login Button
   * @method enterUserCredentials
   * @param {String} email
   * @param {String} pass
   */
  this.fillForm = (firstName,lastName,password,addressFirstName,addressLastName,company,address,addressDos,city,zip,additionalInfo,homePhone,mobilePhone,alias) => {
    actions.clickToElement(this.genderRadioButton);
    actions.enterText(this.firstNameTextBox, firstName);
    actions.enterText(this.lastNameTextBox, lastName);
    actions.enterText(this.passwordTextBox, password);
    this.dayDropdown.$('[value='1']').click();
    // this.monthDropdown.$('[value="August "]').click();;
    // this.yearDropdown.$('[value="2009"]').click();;
    actions.enterText(this.addressFirstNameTextBox, addressFirstName);
    actions.enterText(this.addressLastNameTextBox, addressLastName);
    actions.enterText(this.companyTextBox, company);
    actions.enterText(this.addressTextBox, address);
    actions.enterText(this.address2TextBox, addressDos);
    actions.enterText(this.cityTextBox, city);
    this.stateDropdown.click();
    actions.enterText(this.zipTextBox, zip);
    this.countryDropdown.click();
    actions.enterText(this.additionalinformationTextBox, additionalInfo);
    actions.enterText(this.homePhoneTextBox, homePhone);
    actions.enterText(this.mobilePhoneTextBox, mobilePhone);
    actions.enterText(this.aliasTextBox, alias);
    actions.clickToElement(this.registerButton);
    browser.sleep(6000);

  };


this.isAuthenticationPageDisplayed = () => {
  return actions.isElementDisplayed(this.genderRadioButton);
};

}


module.exports = new CreateAccount();
