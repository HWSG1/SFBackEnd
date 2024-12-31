"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUsuario = exports.nuevoUsuario = void 0;
const nuevoUsuario = (req, res) => {
    console.log(req.body);
    res.json({
        msg: "Insert Usuario",
        body: req.body
    });
};
exports.nuevoUsuario = nuevoUsuario;
const loginUsuario = (req, res) => {
    console.log(req.body);
    res.json({
        msg: "Login Usuario",
        body: req.body
    });
};
exports.loginUsuario = loginUsuario;
