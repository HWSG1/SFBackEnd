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
exports.loginUsuario = exports.nuevoUsuario = exports.getUsuariosInactivos = exports.getUsuariosActivos = exports.getUsuarios = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const usuarios_1 = __importDefault(require("../models/usuarios"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Obtener todos los usuarios de la DBA
    try {
        const getAllUsuarios = yield usuarios_1.default.findAll({});
        res.json(getAllUsuarios);
    }
    catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({
            msg: "Ocurrió un error al obtener los usuarios. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
});
exports.getUsuarios = getUsuarios;
const getUsuariosActivos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Obtener todos los usuarios de la DBA
    try {
        const getAllUsuarios = yield usuarios_1.default.findAll({
            where: { estado: 1 }
        });
        res.json(getAllUsuarios);
    }
    catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({
            msg: "Ocurrió un error al obtener los usuarios. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
});
exports.getUsuariosActivos = getUsuariosActivos;
const getUsuariosInactivos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Obtener todos los usuarios de la DBA
    try {
        const getAllUsuarios = yield usuarios_1.default.findAll({
            where: { estado: 2 }
        });
        res.json(getAllUsuarios);
    }
    catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({
            msg: "Ocurrió un error al obtener los usuarios. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
});
exports.getUsuariosInactivos = getUsuariosInactivos;
const nuevoUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //creación del objeto con las propiedades de la tabla de usuarios de la base de datos
    const { usuario_id, rol_id, nombre_usuario, password, email, fecha_ultimo_acceso, fecha_ultimo_cambio_password, intentos_fallidos, vigencia_dias, creado_por, fecha_creacion, modificado_por, fecha_modificacion, estado } = req.body;
    // Verificar si el usuario ya existe
    const usuarioExistente = yield usuarios_1.default.findOne({
        where: { nombre_usuario: nombre_usuario }
    });
    try {
        if (usuarioExistente) {
            res.status(400).json({
                msg: `El usuario ${nombre_usuario} no se puede registrar debido a que ya existe.`,
            });
            return; // Termina la ejecución de la función debido a que el usuario es existente
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        usuarios_1.default.create({
            usuario_id: usuario_id,
            rol_id: rol_id,
            nombre_usuario: nombre_usuario,
            password: hashedPassword,
            email: email,
            fecha_ultimo_acceso: fecha_ultimo_acceso,
            fecha_ultimo_cambio_password: fecha_ultimo_cambio_password,
            intentos_fallidos: intentos_fallidos,
            vigencia_dias: vigencia_dias,
            creado_por: creado_por,
            fecha_creacion: fecha_creacion,
            modificado_por: modificado_por,
            fecha_modificacion: fecha_modificacion,
            estado: estado
        });
        res.json({
            msg: `Usuario creado ${nombre_usuario} exitosamente`,
        });
    }
    catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({
            msg: "Ocurrió un error al crear el usuario. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
});
exports.nuevoUsuario = nuevoUsuario;
const loginUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre_usuario, password } = req.body;
    try {
        // Verificar si el usuario existe en la base de datos
        const usuario = yield usuarios_1.default.findOne({
            where: { nombre_usuario: nombre_usuario }
        });
        if (!usuario) {
            res.status(400).json({
                msg: "Usuario no existe"
            });
            return;
        }
        // Comparar la contraseña proporcionada con la almacenada en la base de datos
        const match = yield bcrypt_1.default.compare(password, usuario.password);
        if (!match) {
            res.status(400).json({
                msg: "Contraseña incorrecta"
            });
            return;
        }
        else {
            console.log('Contraseña correcta');
        }
        ;
        // Crear un JWT (Json Web Token)
        const payload = {
            nombre_usuario: usuario.nombre_usuario
        };
        // Firma del token con la clave secreta y con una expiración de 1 hora
        const token = jsonwebtoken_1.default.sign(payload, (process.env.JWT_SECRET || 'Lamers005*'), { expiresIn: '1h' });
        // Responder con el token
        res.json({
            msg: "Login exitoso",
            token
        });
    }
    catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({
            msg: "Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido"
        });
    }
});
exports.loginUsuario = loginUsuario;
