"use strict";
exports.__esModule = true;
var NameBook = /** @class */ (function () {
    function NameBook(nameList) {
        this.nameList = nameList;
    }
    NameBook.prototype.isConsistentName = function () {
        var nameList = this.nameList.toString().split(",");
        var isConsistent = false;
        nameList.sort(function (curValue, nextValue) {
            var nameA = curValue.toLowerCase();
            var nameB = nextValue.toLowerCase();
            if (nameA < nameB) {
                isConsistent = true;
                return -1;
            }
            if (nameA > nameB)
                return 1;
            return 0;
        });
        return isConsistent;
    };
    return NameBook;
}());
exports["default"] = NameBook;
