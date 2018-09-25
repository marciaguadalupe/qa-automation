const actions = require('../base/actions');

/**
 * @description Page Object for Login Page.
 */
function LoginPage() {
  // Web elements for Login
  this.loginButton = element(by.css('.login'));

  /**
   * @description Function used to enter credentials for Login then click on Login Button
   * @method enterUserCredentials
   * @param {String} email
   * @param {String} pass
   */
  this.clickLogin = () => {
    actions.clickToElement(this.loginButton);
    //this.loginButton.click();

  };
}
module.exports = new LoginPage();
