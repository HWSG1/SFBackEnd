import {Router} from 'express';

import validarToken from './validar-token';
import { getObjetos, getObjetosActivos, getObjetosSidebar } from '../controllers/objetos.controller';

const router = Router();

router.get('/', getObjetos);
router.get('/activos', getObjetosActivos);
router.get('/sidebar', getObjetosSidebar);
//router.get('/getProductosInactivos', validarToken, getProductosInactivos);

export default router;