"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parametos = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
exports.Parametos = connection_1.default.define('parametos', {
    parametro_id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    nombre_parametro: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    valor_parametro: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'parametros_sistema',
    schema: 'dba_hp_system',
    timestamps: false,
    indexes: [
        {
            name: "parametros_sistema_pkey",
            unique: true,
            fields: [
                { name: "parametro_id" },
            ]
        },
    ]
});
