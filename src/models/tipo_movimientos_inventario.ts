import * as Sequelize from 'sequelize';
import { DataTypes } from 'sequelize';

import sequelize from '../database/connection';


export const TipoMovimientos = sequelize.define('tipoMovimientos',{
  tipo_movimiento_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  descripcion: {
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
  tableName: 'tipo_movimientos_inventario',
  schema: 'dba_hp_system',
  timestamps: false,
  indexes: [
    {
      name: "tipo_movimientos_inventario_pkey",
      unique: true,
      fields: [
        { name: "tipo_movimiento_id" },
      ]
    },
  ]
});
