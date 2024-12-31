import { Router } from "express";
import { getUsuarios, getUsuariosActivos, getUsuariosInactivos, loginUsuario, nuevoUsuario } from "../controllers/usuario.controller";

const router = Router();

router.get('/', getUsuarios);
router.get('/getUsuariosActivos', getUsuariosActivos);
router.get('/getUsuariosInactivos', getUsuariosInactivos);
router.post('/nuevoUsuario', nuevoUsuario);
router.post('/login', loginUsuario);

export default router