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
exports.CeoController = void 0;
class CeoController {
    constructor(ceoUseCases) {
        this.ceoUseCases = ceoUseCases;
        this.verCeos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const ceos = yield this.ceoUseCases.getAllCeo();
                return res.status(200).json(ceos);
            }
            catch (error) {
                console.log(error);
            }
        });
        this.buscarCeoporId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const ceo = yield this.ceoUseCases.getCeoById(req.params.id);
                return res.status(200).json(ceo);
            }
            catch (error) {
                console.log(error);
            }
        });
        this.crearCeo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newCeo = req.body;
                const ceo = yield this.ceoUseCases.createCeo(newCeo);
                return res.status(200).json({ message: "Ceo has been Created with Successfull", ceo });
            }
            catch (error) {
                console.log(error);
            }
        });
        this.borrarCeo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            try {
                const ceo = yield this.ceoUseCases.deleteCeo(req.params.id);
                return res.status(201).json({ message: "Ceo has been Delete with Sucessfull" });
            }
            catch (error) {
                console.log(error);
            }
        });
        this.actualizarCeo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const ceo = yield this.ceoUseCases.updateCeo(req.params.id, req.body);
                return res.status(200).json({ message: "Ceo has been Update with", ceo });
            }
            catch (error) {
                console.log(error);
            }
        });
        this.numeroDeCeo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const count = yield this.ceoUseCases.queryCeo();
                return res.status(200).json({ message: `The number of the ceos is = ` + count });
            }
            catch (error) {
                console.log(error);
            }
        });
        this.busquedaAvanzada = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const params = req.query;
            console.log(params);
            try {
                const ceos = yield this.ceoUseCases.searchAdvanceCeo(params);
                return res.status(200).json(ceos);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.CeoController = CeoController;
//# sourceMappingURL=ceo.controller.js.map