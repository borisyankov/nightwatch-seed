module.exports = {
    "can_not_register_with_invalid_email": function(client) {
        client
            .url("https://www.binaryqa01.com/c/linkto_acopening.cgi?actype=virtual&l=EN")
            .waitForElementVisible("body", 1000)
            .assert.visible('#Email')
            .setValue('#Email','elcho.com')
            .setValue('#chooseapassword','12345678')
            .click('#submit')
            .pause(1000)
            .assert.elementPresent('#erroremail')
            .end();
    }
};
