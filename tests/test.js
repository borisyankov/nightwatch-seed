module.exports = {
    "Demo test Google": function(client) {
        client
            .url("http://www.google.com")
            .waitForElementVisible("body", 1000)
            .assert.title("Google")
            .assert.visible("input[type=text]")
            .setValue("input[type=text]", "www.domcop.com")
            .waitForElementVisible("button[name=btnG]", 1000)
            .click("button[name=btnG]")
            .pause(5000)
            .assert.elementPresent("#main-container")
            .end();
    }
};
