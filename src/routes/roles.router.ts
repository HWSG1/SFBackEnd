import { Router } from "express";
import { getRoles, getRolesActivos, nuevoRol } from "../controllers/roles.controller";

const router = Router();

router.get('/', getRoles);
router.get('/getRolesActivos', getRolesActivos);
router.post('/nuevorol', nuevoRol );

export default router;
