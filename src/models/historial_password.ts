import * as Sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';


export const HistorialPassword = sequelize.define('historialPassword',{
    historial_contraseña_id: {
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
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    vigencia_dias: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    password_hash: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, 
  {
    tableName: 'historial_password',
    schema: 'dba_hp_system',
    timestamps: false,
    indexes: [
      {
        name: "historial_password_pkey",
        unique: true,
        fields: [
          { name: "historial_contraseña_id" },
        ]
      },
    ]
  });