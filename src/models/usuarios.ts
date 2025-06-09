import * as Sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';


const Usuarios = sequelize.define('usuarios',{
  usuario_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  rol_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'roles',
      key: 'rol_id'
    }
  },
  nombre_usuario: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  nombre_1:{
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  nombre_2:{    
    type: DataTypes.STRING(50),
    allowNull: true,
    unique: true,},
  nombre_3:{
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  nombre_4:{    
    type: DataTypes.STRING(50),
    allowNull: true,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  DNI: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  RTN: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  pasaporte: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  carnet_de_residente: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  fecha_ultimo_acceso: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  fecha_ultimo_cambio_password: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  intentos_fallidos: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  vigencia_dias: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  creado_por: {
    type: DataTypes.STRING(50),
    allowNull: false,
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
  tableName: 'usuarios',
  schema: 'dba_hp_system',
  timestamps: false,
  indexes: [
    {
      name: "usuarios_pkey",
      unique: true,
      fields: [
        { name: "usuario_id" },
      ]
    },
  ]
});

export default Usuarios;