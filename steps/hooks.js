require('./hooks');
var { Before, BeforeAll, After, AfterAll } = require('cucumber');

BeforeAll(function () {

    console.log("Insade BeforeAll Hook");
});

AfterAll(function () {

    console.log("Insade AfterAll Hook");
});

Before(function () {

    console.log("Insade Before Hook");
});

After(function () {

    console.log("Insade After Hook");
});