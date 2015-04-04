module.exports = {
    "Try": function(client) {
        client
            .url("https://app.zipmoney.com.au/#/")
            .waitForElementVisible("#wf-form-aboutyouform", 6000)
            .setValue("#firstName", "elcho")
            .setValue("#lastName", "elcho")
            .setValue("#emailAddress", "elcho@abv.bg") 
            .end();
    }
};
