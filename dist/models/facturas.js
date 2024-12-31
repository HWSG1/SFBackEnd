"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facturas = void 0;
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
exports.Facturas = connection_1.default.define('facturas', {
    factura_id: {
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    cliente_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'clientes',
            key: 'cliente_id'
        }
    },
    tipo_factura_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'tipo_factura',
            key: 'tipo_factura_id'
        }
    },
    metodo_pago_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'metodo_pago',
            key: 'metodo_pago_id'
        }
    },
    descuento_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'descuentos',
            key: 'descuento_id'
        }
    },
    numero_factura: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: "facturas_numero_factura_key"
    },
    'rango_facturación': {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
        unique: "facturas_rango_facturación_key"
    },
    subtotal: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false
    },
    total_descuento: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false
    },
    total_impuestos: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false
    },
    total_neto: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false
    },
    fecha_emision: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    fecha_vencimiento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    creado_por: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    fecha_creacion: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
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
    tableName: 'facturas',
    schema: 'dba_hp_system',
    timestamps: false,
    indexes: [
        {
            name: "facturas_numero_factura_key",
            unique: true,
            fields: [
                { name: "numero_factura" },
            ]
        },
        {
            name: "facturas_pkey",
            unique: true,
            fields: [
                { name: "factura_id" },
            ]
        },
        {
            name: "facturas_rango_facturación_key",
            unique: true,
            fields: [
                { name: "rango_facturación" },
            ]
        },
    ]
});
