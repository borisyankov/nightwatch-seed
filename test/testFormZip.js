module.exports = {
  "step one" : function (browser) {
    browser
      .url("https://app.zipmoney.com.au/#/")
      .waitForElementVisible("#wf-form-aboutyouform", 6000)
      .setValue("#firstName", "elcho")
      .setValue("#lastName", "elcho")
      .setValue("#emailAddress", "elcho@abv.bg") 
      .setValue('#dob',"08/04/1976")
      .setValue('#gender', 'female')
      .setValue('#mobilePhone', '0412312312')
      .setValue('#yourid', 'Drivers license')
      .setValue('#LicenseNumber', '123123123')
      .click("#select2-chosen-3")
      .setValue('#s2id_autogen3_search', '2 Holt Street Surry Hills NSW 2010')
      .setValue('#timeAtAddress', '0-6 Months')
      .setValue('#residentialStatus', 'Homeowner-no mortgage')
      .setValue('#rentMortgagePayment', '0')
      .setValue('#rentMortgageFrequency', 'Weekly')
      .setValue('#employmentStatus', 'Full Time')
      .setValue('#employerName', 'elcho')
      .setValue('#timeCurrentEmployer', '1-2 Years')
      .setValue('#incomeAfterTax', '100')
      .setValue('#incomeFrequency', 'Monthly')
      .setValue('#otherMonthlyIncome', '$1700/month')
      .setValue('#numberCreditCards', '1')
      .setValue('#totalMonthlyPayments', '$200/month')
      .click("#agreeToTerms")
      .click("input[type=button]")
      
  }
};