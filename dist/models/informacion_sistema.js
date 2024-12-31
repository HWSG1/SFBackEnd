"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformacionSistema = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
exports.InformacionSistema = connection_1.default.define('informacionSistema', {
    info_sistema_id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    nombre_sistema: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    version_sistema: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    fecha_instalacion: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    estado_sistema: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'informacion_sistema',
    schema: 'dba_hp_system',
    timestamps: false,
    indexes: [
        {
            name: "informacion_sistema_pkey",
            unique: true,
            fields: [
                { name: "info_sistema_id" },
            ]
        },
    ]
});
