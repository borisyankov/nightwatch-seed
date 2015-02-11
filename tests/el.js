
module.exports = {
    "Demo test Yahoo": function(client) {
        client            
            .url("http://www.yahoo.com")
            .waitForElementVisible("body", 1000)
            .assert.title("Yahoo")
            .assert.visible("input[type=text]")
            .setValue("input[type=text]", "amazon.com")
            .click("#search-submit")
            .pause(5000)
            .assert.containsText("#link-1", "Amazon")
            .end();
        }
    
};