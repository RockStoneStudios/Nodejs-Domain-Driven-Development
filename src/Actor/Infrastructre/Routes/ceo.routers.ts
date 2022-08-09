import { Router } from "express";
import {CeoController} from '../Controller/ceo.controller';
import {CeoMongodb} from '../Repository/ceo.mongodb';
import {CeoUseCases} from '../../Application/ceoUseCases';

const router = Router();

const mongoRepository = new CeoMongodb();

const ceoUseCases = new CeoUseCases(mongoRepository);

const ceoController = new CeoController(ceoUseCases);
router.get('/',ceoController.verCeos);
router.post('/create',ceoController.crearCeo);
router.delete('/delete/:id',ceoController.borrarCeo);
router.put('/update/:id',ceoController.actualizarCeo);
router.get('/query',ceoController.numeroDeCeo);
router.get('/search',ceoController.busquedaAvanzada);
router.get('/:id',ceoController.buscarCeoporId);



export default router;