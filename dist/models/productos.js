"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Productos = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
exports.Productos = connection_1.default.define('productos', {
    producto_id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    codigo_producto: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: "productos_codigo_producto_key"
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    categoria_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'categorias',
            key: 'categoria_id'
        }
    },
    unidad_medida: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    fecha_creacion: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    creado_por: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    modificado_por: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    },
    fecha_modificacion: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    estado: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'productos',
    schema: 'dba_hp_system',
    timestamps: false,
    indexes: [
        {
            name: "productos_codigo_producto_key",
            unique: true,
            fields: [
                { name: "codigo_producto" },
            ]
        },
        {
            name: "productos_pkey",
            unique: true,
            fields: [
                { name: "producto_id" },
            ]
        },
    ]
});
