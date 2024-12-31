import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database/connection';


export const Notificaciones = sequelize.define('notificaciones',{
    config_notificacion_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre_notificacion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    canal_notificacion: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, 
  {
    tableName: 'config_notificaciones',
    schema: 'dba_hp_system',
    timestamps: false,
    indexes: [
      {
        name: "config_notificaciones_pkey",
        unique: true,
        fields: [
          { name: "config_notificacion_id" },
        ]
      },
    ]
  });