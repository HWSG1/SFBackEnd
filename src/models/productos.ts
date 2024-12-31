
import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../database/connection';


export const Productos = sequelize.define('productos',{
  producto_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  codigo_producto: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: "productos_codigo_producto_key"
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'categorias',
      key: 'categoria_id'
    }
  },
  unidad_medida: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  creado_por: {
    type: DataTypes.STRING(50),
    allowNull: false
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
  tableName: 'productos',
  schema: 'dba_hp_system',
  timestamps: false,
  indexes: [
    {
      name: "productos_codigo_producto_key",
      unique: true,
      fields: [
        { name: "codigo_producto" },
      ]
    },
    {
      name: "productos_pkey",
      unique: true,
      fields: [
        { name: "producto_id" },
      ]
    },
  ]
});