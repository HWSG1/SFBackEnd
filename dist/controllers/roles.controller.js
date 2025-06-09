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
exports.nuevoRol = exports.getRolesActivos = exports.getRoles = void 0;
const roles_1 = require("../models/roles");
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Obtener todos los roles de la DBA
    try {
        const getAllRoles = yield roles_1.Roles.findAll({});
        res.json(getAllRoles);
    }
    catch (error) {
        console.error("Error al obtener los roles:", error);
        res.status(500).json({
            msg: "Ocurrió un error al obtener los roles. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
});
exports.getRoles = getRoles;
const getRolesActivos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getRolesActivos = yield roles_1.Roles.findAll({
            where: { estado: 1 }
        });
        res.json(getRolesActivos);
    }
    catch (error) {
        console.error("Error al obtener los roles activos:", error);
        res.status(500).json({
            msg: "Ocurrió un error al obtener los roles activos. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
});
exports.getRolesActivos = getRolesActivos;
const nuevoRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre_rol, descripcion, creado_por, modificado_por, fecha_modificacion, estado } = req.body;
    try {
        // Validar si el rol ya existe (por nombre)
        const rolExistente = yield roles_1.Roles.findOne({
            where: { nombre_rol: nombre_rol }
        });
        if (rolExistente) {
            res.status(400).json({
                msg: `El rol '${nombre_rol}' ya existe.`,
            });
            return;
        }
        // Crear el nuevo rol
        const nuevoRol = yield roles_1.Roles.create({
            nombre_rol: nombre_rol.toUpperCase(),
            descripcion: descripcion.toUpperCase(),
            creado_por: creado_por.toUpperCase(),
            modificado_por: modificado_por.toUpperCase(),
            fecha_modificacion: fecha_modificacion,
            estado: estado
        });
        res.status(201).json({
            msg: `Rol '${nombre_rol}' creado exitosamente.`,
            rol: nuevoRol
        });
    }
    catch (error) {
        console.error("Error al crear el rol:", error);
        res.status(500).json({
            msg: "Ocurrió un error al crear el rol.",
            error: error instanceof Error ? error.message : "Error desconocido"
        });
    }
});
exports.nuevoRol = nuevoRol;
