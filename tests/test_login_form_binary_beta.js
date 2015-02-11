module.exports = {
    "Test visible login form binaryqa01": function(client) {
        client
            .url("http://www.binaryqa01.com")
            .waitForElementVisible("body", 1000)
            .assert.visible('#Email')
            .assert.visible('#chooseapassword')
            .end();
    }
};
