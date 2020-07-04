"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Factorial {
    constructor(x) {
        this.x = x;
    }
    factorialX() {
        let fatorial = BigInt(1);
        if (this.x == BigInt(0) || this.x == BigInt(1)) {
            return fatorial;
        }
        for (let i = 1; i <= this.x; i++) {
            fatorial = fatorial * BigInt(i);
        }
        const result = fatorial.toString().split("").map(items => parseInt(items)).reduce((total, currentElement) => total + currentElement);
        return result;
    }
}
exports.default = Factorial;
//# sourceMappingURL=index.js.map