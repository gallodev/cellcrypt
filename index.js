"use strict";
exports.__esModule = true;
var Factorial_1 = require("./build/Factorial");
var NameBook_1 = require("./build/NameBook");
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question(' Choose the challenge : [1] Factorial hash | [2] Name book : ', function (value) {
    console.log(value);
    switch (parseInt(value)) {
        case 1:
            rl.question(' Enter the value of X : ', function (value) {
                var factorialObj = new Factorial_1["default"](BigInt(value));
                var response = factorialObj.factorialX();
                console.log("The result is : " + response);
                rl.close();
            });
            break;
        case 2:
            rl.question(' Enter a list of names : ', function (value) {
                var NameBookObj = new NameBook_1["default"](value);
                var response = NameBookObj.isConsistentName();
                console.log("The list is consistent : " + response);
                rl.close();
            });
            break;
        default:
            console.log(" Invalid option. ");
            rl.close();
            break;
    }
});
