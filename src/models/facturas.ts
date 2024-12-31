import * as Sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';


export const Facturas = sequelize.define('facturas',{
    factura_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'clientes',
        key: 'cliente_id'
      }
    },
    tipo_factura_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipo_factura',
        key: 'tipo_factura_id'
      }
    },
    metodo_pago_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'metodo_pago',
        key: 'metodo_pago_id'
      }
    },
    descuento_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'descuentos',
        key: 'descuento_id'
      }
    },
    numero_factura: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "facturas_numero_factura_key"
    },
    'rango_facturación': {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "facturas_rango_facturación_key"
    },
    subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    total_descuento: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    total_impuestos: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    total_neto: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fecha_emision: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    fecha_vencimiento: {
      type: DataTypes.DATE,
      allowNull: false
    },
    creado_por: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    modificado_por: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fecha_modificacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
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