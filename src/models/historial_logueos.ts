import * as Sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';


export const HistorialLogueos = sequelize.define('historialLogueos',{
    logueo_id: {
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
    fecha_logueo: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    ip_cliente: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    estado_logueo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_deslogueo: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, 
  {
    tableName: 'historial_logueos',
    schema: 'dba_hp_system',
    timestamps: false,
    indexes: [
      {
        name: "historial_logueos_pkey",
        unique: true,
        fields: [
          { name: "logueo_id" },
        ]
      },
    ]
  });