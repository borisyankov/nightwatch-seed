module.exports = {
    "can_not_register_with_empty_email": function(client) {
        client
            .url("https://www.hittail.com/register/personal")
            .waitForElementVisible("body", 1000)
            .setValue('#registration_url','elchoi.com')
            .setValue('#registration_password','12345678')
            .click("input[type=submit]")
            .pause(1000)
            .assert.elementPresent('.error')
            .end();
    }
};
