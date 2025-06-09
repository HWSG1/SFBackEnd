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
exports.getObjetosSidebar = exports.getObjetosActivos = exports.getObjetos = void 0;
const objetos_1 = require("../models/objetos");
const getObjetos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllObjetos = yield objetos_1.Objetos.findAll({});
        res.json(getAllObjetos);
    }
    catch (error) {
        console.error("Error al listar objetos:", error);
        res.status(500).json({
            msg: "Ocurrió un error al buscar los objetos. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
});
exports.getObjetos = getObjetos;
const getObjetosActivos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllObjetos = yield objetos_1.Objetos.findAll({
            where: { estado: 1 }
        });
        res.json(getAllObjetos);
    }
    catch (error) {
        console.error("Error al listar objetos:", error);
        res.status(500).json({
            msg: "Ocurrió un error al buscar los objetos. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
});
exports.getObjetosActivos = getObjetosActivos;
const getObjetosSidebar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllObjetos = yield objetos_1.Objetos.findAll({
            where: {
                estado: 1,
                tipo: "sidebar"
            }
        });
        // Ordenar los resultados manualmente
        const order = ['Dashboard', 'Ventas', 'Compras', 'Inventario', 'Reportes', 'Mantenimiento'];
        const orderedObjetos = getAllObjetos.sort((a, b) => {
            return order.indexOf(a.get('nombre_objeto')) - order.indexOf(b.get('nombre_objeto'));
        });
        res.json(orderedObjetos);
    }
    catch (error) {
        console.error("Error al listar objetos:", error);
        res.status(500).json({
            msg: "Ocurrió un error al buscar los objetos. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
});
exports.getObjetosSidebar = getObjetosSidebar;
