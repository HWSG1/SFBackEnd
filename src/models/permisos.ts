import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database/connection';


export const Permisos = sequelize.define('permisos',{
    permiso_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    objeto_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'objetos',
        key: 'objeto_id'
      }
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'roles',
        key: 'rol_id'
      }
    },
    ver: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    insertar: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    actualizar: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    eliminar: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'permisos',
    schema: 'dba_hp_system',
    timestamps: false,
    indexes: [
      {
        name: "permisos_pkey",
        unique: true,
        fields: [
          { name: "permiso_id" },
        ]
      },
    ]
  });