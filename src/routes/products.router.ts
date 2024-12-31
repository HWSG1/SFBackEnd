import {Router} from 'express';
import { getProductos, getProductosActivos, getProductosInactivos } from '../controllers/products.controller';
import validarToken from './validar-token';

const router = Router();

router.get('/', validarToken, getProductos);
router.get('/getProductosActivos', validarToken, getProductosActivos);
router.get('/getProductosInactivos', validarToken, getProductosInactivos);

export default router;