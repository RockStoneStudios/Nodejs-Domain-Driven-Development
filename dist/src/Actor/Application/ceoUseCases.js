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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CeoUseCases = void 0;
const ceoValue_1 = require("../Domain/ceoValue");
class CeoUseCases {
    constructor(ceoRepository) {
        this.ceoRepository = ceoRepository;
        this.getAllCeo = () => __awaiter(this, void 0, void 0, function* () {
            const ceos = yield this.ceoRepository.getAllCeo();
            return ceos;
        });
        this.createCeo = ({ firstname, lastname, age, business, fortune }) => __awaiter(this, void 0, void 0, function* () {
            const ceoValue = new ceoValue_1.CeoValue({ firstname, lastname, age, business, fortune });
            const ceo = yield this.ceoRepository.createCeo(ceoValue);
            return ceo;
        });
        this.getCeoById = (id) => __awaiter(this, void 0, void 0, function* () {
            const ceo = yield this.ceoRepository.getCeoById(id);
            return ceo;
        });
        this.deleteCeo = (id) => __awaiter(this, void 0, void 0, function* () {
            const ceo = yield this.ceoRepository.deleteCeo(id);
            return ceo;
        });
        this.updateCeo = (id, newCeo) => __awaiter(this, void 0, void 0, function* () {
            const ceo = yield this.ceoRepository.updateCeo(id, newCeo);
            return ceo;
        });
        this.queryCeo = () => __awaiter(this, void 0, void 0, function* () {
            const ceo = yield this.ceoRepository.queryCeo();
            return ceo;
        });
        this.searchAdvanceCeo = (limit) => __awaiter(this, void 0, void 0, function* () {
            const ceo = yield this.ceoRepository.searchAdvanceCeo(limit);
            return ceo;
        });
    }
}
exports.CeoUseCases = CeoUseCases;
//# sourceMappingURL=ceoUseCases.js.map