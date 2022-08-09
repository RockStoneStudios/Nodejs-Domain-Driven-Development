"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CeoMongodb = void 0;
const Ceo_1 = __importDefault(require("../Model/Ceo"));
class CeoMongodb {
    createCeo(newCeo) {
        return __awaiter(this, void 0, void 0, function* () {
            const ceo = yield Ceo_1.default.create(newCeo);
            return ceo;
        });
    }
    getAllCeo() {
        return __awaiter(this, void 0, void 0, function* () {
            const ceos = yield Ceo_1.default.find();
            return ceos;
        });
    }
    getCeoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const ceo = yield Ceo_1.default.findOne({ id: id });
            return ceo;
        });
    }
    deleteCeo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const ceo = yield Ceo_1.default.findOneAndDelete({ id: id });
            return ceo;
        });
    }
    updateCeo(id, updateCeo) {
        return __awaiter(this, void 0, void 0, function* () {
            const ceo = yield Ceo_1.default.findOneAndUpdate({ id: id }, updateCeo, { new: true });
            return ceo;
        });
    }
    queryCeo() {
        return __awaiter(this, void 0, void 0, function* () {
            const numberofCeos = yield Ceo_1.default.count();
            return numberofCeos;
        });
    }
    searchAdvanceCeo(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const ceo = yield Ceo_1.default.find({ age: { $gte: params.min, $lte: params.max } }).limit(params.limit);
            return ceo;
        });
    }
}
exports.CeoMongodb = CeoMongodb;
//# sourceMappingURL=ceo.mongodb.js.map