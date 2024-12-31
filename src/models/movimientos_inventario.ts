import * as Sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';


export const MovimientosInventario = sequelize.define('movimientosInventario',{
  movimiento_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'usuarios',
      key: 'usuario_id'
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
  tipo_movimiento: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  observaciones: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  motivo: {
    type: DataTypes.STRING(50),
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
  tableName: 'movimientos_inventario',
  schema: 'dba_hp_system',
  timestamps: false,
  indexes: [
    {
      name: "movimientos_inventario_pkey",
      unique: true,
      fields: [
        { name: "movimiento_id" },
      ]
    },
  ]
});