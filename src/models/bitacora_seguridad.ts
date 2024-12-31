import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database/connection';


export const Bitacora = sequelize.define('bitacora',{
    bitacora_id: {
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
    fecha_accion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    accion: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    tabla_afectada: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    registro_afectado_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    descripcion_accion: {
      type: DataTypes.STRING(300),
      allowNull: false
    }
  }, 
  {
    tableName: 'bitacora_seguridad',
    schema: 'dba_hp_system',
    timestamps: false,
    indexes: [
      {
        name: "bitacora_seguridad_pkey",
        unique: true,
        fields: [
          { name: "bitacora_id" },
        ]
      },
    ]
  });