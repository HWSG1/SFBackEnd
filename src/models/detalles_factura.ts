import * as Sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';


export const DetalleFacturas = sequelize.define('detalleFacturas',{
    detalle_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    factura_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'facturas',
        key: 'factura_id'
      }
    },
    producto_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'productos',
        key: 'producto_id'
      }
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    precio_unitario: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    total_descuento: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    total_impuestos: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    total_neto: {
      type: DataTypes.DECIMAL,
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
    tableName: 'detalles_factura',
    schema: 'dba_hp_system',
    timestamps: false,
    indexes: [
      {
        name: "detalles_factura_pkey",
        unique: true,
        fields: [
          { name: "detalle_id" },
        ]
      },
    ]
  });
