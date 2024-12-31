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
exports.getProductosInactivos = exports.getProductosActivos = exports.getProductos = void 0;
const productos_1 = require("../models/productos");
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //creación del objeto con las propiedades de la tabla de usuarios de la base de datos
    const { producto_id, codigo_producto, nombre, descripción, categoria_id, unidad_medida, fecha_creacion, creado_por, modificado_por, fecha_modificacion, estado, } = req.body;
    // Verificar si el producto ya existe
    try {
        const getAllProductos = yield productos_1.Productos.findAll({});
        res.json(getAllProductos);
    }
    catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({
            msg: "Ocurrió un error al crear el usuario. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
});
exports.getProductos = getProductos;
const getProductosActivos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllProductos = yield productos_1.Productos.findAll({
            where: { estado: 1 }
        });
        res.json(getAllProductos);
    }
    catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({
            msg: "Ocurrió un error al crear el usuario. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
});
exports.getProductosActivos = getProductosActivos;
const getProductosInactivos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllProductos = yield productos_1.Productos.findAll({
            where: { estado: 2 }
        });
        res.json(getAllProductos);
    }
    catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({
            msg: "Ocurrió un error al crear el usuario. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
});
exports.getProductosInactivos = getProductosInactivos;
