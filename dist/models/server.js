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
const express_1 = __importDefault(require("express"));
const products_router_1 = __importDefault(require("../routes/products.router"));
const usuario_router_1 = __importDefault(require("../routes/usuario.router"));
const connection_1 = __importDefault(require("../database/connection"));
class Server {
    constructor() {
        console.log('Iniciando constructor en el server');
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        console.log('Constructor OK');
        this.listen();
        this.mildwares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('App corriendo en el puerto: ' + this.port);
        });
    }
    routes() {
        this.app.use('/api/productos', products_router_1.default);
        this.app.use('/api/usuarios', usuario_router_1.default);
    }
    mildwares() {
        this.app.use(express_1.default.json());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Connection has been established successfully.');
            }
            catch (error) {
                console.error('Unable to connect to the database:', error);
            }
        });
    }
}
exports.default = Server;
