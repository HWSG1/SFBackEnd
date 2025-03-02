import * as Sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';


export const TipoMoneda = sequelize.define('tipoMoneda',{
  tipo_moneda_id: {
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
  tableName: 'tipo_moneda',
  schema: 'dba_hp_system',
  timestamps: false,
  indexes: [
    {
      name: "tipo_moneda_pkey",
      unique: true,
      fields: [
        { name: "tipo_moneda_id" },
      ]
    },
  ]
});