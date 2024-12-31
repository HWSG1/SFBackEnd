import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database/connection';


export const Parametos = sequelize.define('parametos',{
    parametro_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nombre_parametro: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    valor_parametro: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, 
  {
    tableName: 'parametros_sistema',
    schema: 'dba_hp_system',
    timestamps: false,
    indexes: [
      {
        name: "parametros_sistema_pkey",
        unique: true,
        fields: [
          { name: "parametro_id" },
        ]
      },
    ]
  });
