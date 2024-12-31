import * as Sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';


export const MetodoPago = sequelize.define('metodoPago',{
  metodo_pago_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre_metodo: {
    type: DataTypes.STRING(50),
    allowNull: false
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
  }
}, 
{
  tableName: 'metodo_pago',
  schema: 'dba_hp_system',
  timestamps: false,
  indexes: [
    {
      name: "metodo_pago_pkey",
      unique: true,
      fields: [
        { name: "metodo_pago_id" },
      ]
    },
  ]
});