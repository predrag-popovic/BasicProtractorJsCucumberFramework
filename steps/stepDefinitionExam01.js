var { Given, When, Then, Before, BeforeAll, After, AfterAll } = require('cucumber');

Given(/^user navigates to facebook website$/, function () {

    return console.log("@Given --- user navigates to facebook website");
});

When(/^user validates the home page title$/, function () {

    return console.log("@When --- user validates the home page title");
});

Then(/^user entered "([^"]*)" username$/, function (username) {

    return console.log("@Then --- user entered " + username + " username");
});

Then(/^user entered "([^"]*)" password$/, function (password) {

    return console.log("@Then --- user entered " + password + " password");
});

Then(/^user should "([^"]*)" successfully logged in$/, function (loginStatus) {

    return console.log("@Then --- user should " + loginStatus + " successfully logged in");
});
