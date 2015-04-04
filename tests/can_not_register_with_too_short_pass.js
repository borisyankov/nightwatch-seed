module.exports = {
    "can_not_register_with_too_short_pass": function(client) {
        client
            .url("https://www.binaryqa01.com/c/linkto_acopening.cgi?actype=virtual&l=EN")
            .waitForElementVisible("body", 1000)
            .setValue('#Email','elchoa@yahoo.com')
            .assert.visible('#chooseapassword')
            .setValue('#chooseapassword','1234')
            .click('#submit')
            .pause(1000)
            .assert.elementPresent('#errorpassword')
            .end();
    }
};
