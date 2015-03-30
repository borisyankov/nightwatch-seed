module.exports = {
  "step one" : function (browser) {
    browser
      .url("https://app.zipmoney.com.au/#/")
      .waitForElementVisible("#wf-form-aboutyouform", 6000)
      .setValue('input[type=text]', 'nightwatch')
      .setValue("#firstName", "elcho")
      .setValue("#lastName", "elcho")
      .setValue("#emailAddress", "elcho@abv.bg") 
      .setValue('#dob',"08/04/1976")
      .assert.visible('.validation-error ')
      .click('#agreeToTerms')
      .click("input[type=button]")
      .end();
  }
};