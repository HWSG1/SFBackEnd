import * as Sequelize from 'sequelize';
import { DataTypes } from 'sequelize';

import sequelize from '../database/connection';


export const Impuestos = sequelize.define('impuestos',{
  impuesto_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre_impuesto: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  tipo_impuesto: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  porcentaje: {
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
  tableName: 'impuestos',
  schema: 'dba_hp_system',
  timestamps: false,
  indexes: [
    {
      name: "impuestos_pkey",
      unique: true,
      fields: [
        { name: "impuesto_id" },
      ]
    },
  ]
});