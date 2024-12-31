import * as Sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

export const DetalleOrdenes = sequelize.define('detalleOrdenes',{
  detalle_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  orden_compra_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ordenes_compra',
      key: 'orden_compra_id'
    }
  },
  producto_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'productos',
      key: 'producto_id'
    }
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  precio_unitario: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  total_descuento: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  subtotal: {
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
  tableName: 'detalles_orden_compra',
  schema: 'dba_hp_system',
  timestamps: false,
  indexes: [
    {
      name: "detalles_orden_compra_pkey",
      unique: true,
      fields: [
        { name: "detalle_id" },
      ]
    },
  ]
});