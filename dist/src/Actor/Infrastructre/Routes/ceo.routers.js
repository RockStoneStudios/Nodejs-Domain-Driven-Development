"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ceo_controller_1 = require("../Controller/ceo.controller");
const ceo_mongodb_1 = require("../Repository/ceo.mongodb");
const ceoUseCases_1 = require("../../Application/ceoUseCases");
const router = (0, express_1.Router)();
const mongoRepository = new ceo_mongodb_1.CeoMongodb();
const ceoUseCases = new ceoUseCases_1.CeoUseCases(mongoRepository);
const ceoController = new ceo_controller_1.CeoController(ceoUseCases);
router.get('/', ceoController.verCeos);
router.post('/create', ceoController.crearCeo);
router.delete('/delete/:id', ceoController.borrarCeo);
router.put('/update/:id', ceoController.actualizarCeo);
router.get('/query', ceoController.numeroDeCeo);
router.get('/search', ceoController.busquedaAvanzada);
router.get('/:id', ceoController.buscarCeoporId);
exports.default = router;
//# sourceMappingURL=ceo.routers.js.map