import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database/connection';

export const Clientes = sequelize.define('clientes',{
    cliente_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_tipo_documento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipo_documento',
        key: 'tipo_documento_id'
      }
    },
    tipo_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipo_cliente',
        key: 'tipo_cliente_id'
      }
    },
    numero_documento: {
      type: DataTypes.STRING(13),
      allowNull: false,
      unique: "clientes_numero_documento_key"
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
      unique: "clientes_rtn_key"
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
  }, {
    tableName: 'clientes',
    schema: 'dba_hp_system',
    timestamps: false,
    indexes: [
      {
        name: "clientes_numero_documento_key",
        unique: true,
        fields: [
          { name: "numero_documento" },
        ]
      },
      {
        name: "clientes_pkey",
        unique: true,
        fields: [
          { name: "cliente_id" },
        ]
      },
      {
        name: "clientes_rtn_key",
        unique: true,
        fields: [
          { name: "rtn" },
        ]
      },
    ]
  });