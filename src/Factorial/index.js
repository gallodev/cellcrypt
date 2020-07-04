"use strict";
exports.__esModule = true;
var Factorial = /** @class */ (function () {
    function Factorial(x) {
        this.x = x;
    }
    Factorial.prototype.factorialX = function () {
        var fatorial = BigInt(1);
        if (this.x == BigInt(0) || this.x == BigInt(1)) {
            return fatorial;
        }
        for (var i = 1; i <= this.x; i++) {
            fatorial = fatorial * BigInt(i);
        }
        var result = fatorial.toString().split("").map(function (items) { return parseInt(items); }).reduce(function (total, currentElement) { return total + currentElement; });
        return result;
    };
    return Factorial;
}());
exports["default"] = Factorial;
