"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
function calculateFactorialHTML() {
    let inputX = parseInt(document.getElementById("txtInputX").value);
    let factorialObj = new index_1.default(BigInt(inputX));
    let response = factorialObj.factorialX();
    document.getElementById("lbResult").innerHTML = "The result is : " + response.toString();
    console.log(response);
}
//# sourceMappingURL=htmlFactorial.js.map