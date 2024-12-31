import * as Sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';


export const InformacionSistema = sequelize.define('informacionSistema',{
  info_sistema_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  nombre_sistema: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  version_sistema: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  fecha_instalacion: {
    type: DataTypes.DATE,
    allowNull: false
  },
  estado_sistema: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, 
{
  tableName: 'informacion_sistema',
  schema: 'dba_hp_system',
  timestamps: false,
  indexes: [
    {
      name: "informacion_sistema_pkey",
      unique: true,
      fields: [
        { name: "info_sistema_id" },
      ]
    },
  ]
});