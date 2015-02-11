module.exports = {
    "Binary-beta test": function(client) {
        client
            .url("http://www.binaryqa01.com")
            .waitForElementVisible("body", 1000)
            .assert.visible('#Email')
            .setValue('#Email','elchian@yahoo.com')
            .setValue('#chooseapassword','12345678')
            .click('#btn_registration')
            .pause(5000)
            .assert.elementPresent('#client_loginid')
            .end();
    }
};
