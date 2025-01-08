import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database/connection';


export const Objetos = sequelize.define('objetos',{
  objeto_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre_objeto: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  icono: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  url: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  descripcion: {
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
  },
  tipo: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, 
{
  tableName: 'objetos',
  schema: 'dba_hp_system',
  timestamps: false,
  indexes: [
    {
      name: "objetos_pkey",
      unique: true,
      fields: [
        { name: "objeto_id" },
      ]
    },
  ]
});