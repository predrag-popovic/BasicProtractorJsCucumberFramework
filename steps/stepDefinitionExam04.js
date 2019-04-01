var {Given,When, Then, After} = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

After(function(scenarioResult) {

    let self = this;

    if(scenarioResult.result.status === 'failed'){
    return browser.takeScreenshot()
    .then(function(screenshot) {
        const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
        self.attach(decodedImage, 'image/png');
        console.log("scenarioResult =", scenarioResult);
    });
}
});

Given(/^I go to "([^"]*)"$/, function (site, callback) {

    browser.get(site).then(callback);
});

When(/^I found the title as "([^"]*)"$/, function (title) {

    var actualTitle = browser.getTitle();
    return expect(actualTitle).to.eventually.equal(title);
});