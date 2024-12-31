"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = require("../controllers/products.controller");
const validar_token_1 = __importDefault(require("./validar-token"));
const router = (0, express_1.Router)();
router.get('/', validar_token_1.default, products_controller_1.getProductos);
router.get('/getProductosActivos', validar_token_1.default, products_controller_1.getProductosActivos);
router.get('/getProductosInactivos', validar_token_1.default, products_controller_1.getProductosInactivos);
exports.default = router;
