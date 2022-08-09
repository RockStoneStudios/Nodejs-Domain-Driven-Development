"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CeoValue = void 0;
const uuid_1 = require("uuid");
class CeoValue {
    constructor({ firstname, lastname, age, business, fortune }) {
        this.id = (0, uuid_1.v4)();
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.business = business;
        this.fortune = fortune;
    }
}
exports.CeoValue = CeoValue;
//# sourceMappingURL=ceoValue.js.map