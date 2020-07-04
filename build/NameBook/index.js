"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NameBook {
    constructor(nameList) {
        this.nameList = nameList;
    }
    isConsistentName() {
        this.nameList.sort(function (curValue, nextValue) {
            if (curValue < nextValue) {
                return -1;
            }
            if (curValue > nextValue) {
                return 1;
            }
            return 0;
        });
    }
}
exports.default = NameBook;
//# sourceMappingURL=index.js.map