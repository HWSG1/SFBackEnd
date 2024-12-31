import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database/connection';


export const OrdenesCompra = sequelize.define('OrdenesCompra',{
    orden_compra_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    proveedor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'proveedores',
        key: 'proveedor_id'
      }
    },
    tipo_moneda_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipo_moneda',
        key: 'tipo_moneda_id'
      }
    },
    fecha_emision: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
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
    notas: {
      type: DataTypes.STRING(100),
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
    tableName: 'ordenes_compra',
    schema: 'dba_hp_system',
    timestamps: false,
    indexes: [
      {
        name: "ordenes_compra_pkey",
        unique: true,
        fields: [
          { name: "orden_compra_id" },
        ]
      },
    ]
  });