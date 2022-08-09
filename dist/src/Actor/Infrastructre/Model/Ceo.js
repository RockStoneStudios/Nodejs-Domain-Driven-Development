"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CeoSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
    },
    firstname: {
        type: String,
        require: true,
        unique: true
    },
    lastname: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        Option: {
            min: 20
        },
        default: 30
    },
    business: [String],
    fortune: {
        type: Number,
    }
}, {
    timestamps: false
});
exports.default = (0, mongoose_1.model)('CEO', CeoSchema);
//# sourceMappingURL=Ceo.js.map