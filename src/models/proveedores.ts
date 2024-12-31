import * as Sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';


export const Proveedores = sequelize.define('proveedores',{
  proveedor_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  tipo_cliente: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'tipo_cliente',
      key: 'tipo_cliente_id'
    }
  },
  tipo_documento: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'tipo_documento',
      key: 'tipo_documento_id'
    }
  },
  numero_documento: {
    type: DataTypes.STRING(13),
    allowNull: false,
    unique: "proveedores_numero_documento_key"
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  rtn: {
    type: DataTypes.STRING(15),
    allowNull: true,
    unique: "proveedores_rtn_key"
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
  tableName: 'proveedores',
  schema: 'dba_hp_system',
  timestamps: false,
  indexes: [
    {
      name: "proveedores_numero_documento_key",
      unique: true,
      fields: [
        { name: "numero_documento" },
      ]
    },
    {
      name: "proveedores_pkey",
      unique: true,
      fields: [
        { name: "proveedor_id" },
      ]
    },
    {
      name: "proveedores_rtn_key",
      unique: true,
      fields: [
        { name: "rtn" },
      ]
    },
  ]
});