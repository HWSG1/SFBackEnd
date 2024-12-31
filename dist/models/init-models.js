"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarios = exports.tipo_movimientos_inventario = exports.tipo_moneda = exports.tipo_factura = exports.tipo_documento = exports.tipo_cliente = exports.roles = exports.proveedores = exports.productos = exports.permisos = exports.parametros_sistema = exports.ordenes_compra = exports.objetos = exports.movimientos_inventario = exports.metodo_pago = exports.inventarios = exports.informacion_sistema = exports.impuestos = exports.historial_password = exports.historial_logueos = exports.facturas = exports.detalles_orden_compra = exports.detalles_factura = exports.descuentos = exports.config_notificaciones = exports.clientes = exports.categorias = exports.bitacora_seguridad = void 0;
exports.initModels = initModels;
const bitacora_seguridad_1 = require("./bitacora_seguridad");
Object.defineProperty(exports, "bitacora_seguridad", { enumerable: true, get: function () { return bitacora_seguridad_1.bitacora_seguridad; } });
const categorias_1 = require("./categorias");
Object.defineProperty(exports, "categorias", { enumerable: true, get: function () { return categorias_1.categorias; } });
const clientes_1 = require("./clientes");
Object.defineProperty(exports, "clientes", { enumerable: true, get: function () { return clientes_1.clientes; } });
const config_notificaciones_1 = require("./config_notificaciones");
Object.defineProperty(exports, "config_notificaciones", { enumerable: true, get: function () { return config_notificaciones_1.config_notificaciones; } });
const descuentos_1 = require("./descuentos");
Object.defineProperty(exports, "descuentos", { enumerable: true, get: function () { return descuentos_1.descuentos; } });
const detalles_factura_1 = require("./detalles_factura");
Object.defineProperty(exports, "detalles_factura", { enumerable: true, get: function () { return detalles_factura_1.detalles_factura; } });
const detalles_orden_compra_1 = require("./detalles_orden_compra");
Object.defineProperty(exports, "detalles_orden_compra", { enumerable: true, get: function () { return detalles_orden_compra_1.detalles_orden_compra; } });
const facturas_1 = require("./facturas");
Object.defineProperty(exports, "facturas", { enumerable: true, get: function () { return facturas_1.facturas; } });
const historial_logueos_1 = require("./historial_logueos");
Object.defineProperty(exports, "historial_logueos", { enumerable: true, get: function () { return historial_logueos_1.historial_logueos; } });
const historial_password_1 = require("./historial_password");
Object.defineProperty(exports, "historial_password", { enumerable: true, get: function () { return historial_password_1.historial_password; } });
const impuestos_1 = require("./impuestos");
Object.defineProperty(exports, "impuestos", { enumerable: true, get: function () { return impuestos_1.impuestos; } });
const informacion_sistema_1 = require("./informacion_sistema");
Object.defineProperty(exports, "informacion_sistema", { enumerable: true, get: function () { return informacion_sistema_1.informacion_sistema; } });
const inventarios_1 = require("./inventarios");
Object.defineProperty(exports, "inventarios", { enumerable: true, get: function () { return inventarios_1.inventarios; } });
const metodo_pago_1 = require("./metodo_pago");
Object.defineProperty(exports, "metodo_pago", { enumerable: true, get: function () { return metodo_pago_1.metodo_pago; } });
const movimientos_inventario_1 = require("./movimientos_inventario");
Object.defineProperty(exports, "movimientos_inventario", { enumerable: true, get: function () { return movimientos_inventario_1.movimientos_inventario; } });
const objetos_1 = require("./objetos");
Object.defineProperty(exports, "objetos", { enumerable: true, get: function () { return objetos_1.objetos; } });
const ordenes_compra_1 = require("./ordenes_compra");
Object.defineProperty(exports, "ordenes_compra", { enumerable: true, get: function () { return ordenes_compra_1.ordenes_compra; } });
const parametros_sistema_1 = require("./parametros_sistema");
Object.defineProperty(exports, "parametros_sistema", { enumerable: true, get: function () { return parametros_sistema_1.parametros_sistema; } });
const permisos_1 = require("./permisos");
Object.defineProperty(exports, "permisos", { enumerable: true, get: function () { return permisos_1.permisos; } });
const productos_1 = require("./productos");
Object.defineProperty(exports, "productos", { enumerable: true, get: function () { return productos_1.productos; } });
const proveedores_1 = require("./proveedores");
Object.defineProperty(exports, "proveedores", { enumerable: true, get: function () { return proveedores_1.proveedores; } });
const roles_1 = require("./roles");
Object.defineProperty(exports, "roles", { enumerable: true, get: function () { return roles_1.roles; } });
const tipo_cliente_1 = require("./tipo_cliente");
Object.defineProperty(exports, "tipo_cliente", { enumerable: true, get: function () { return tipo_cliente_1.tipo_cliente; } });
const tipo_documento_1 = require("./tipo_documento");
Object.defineProperty(exports, "tipo_documento", { enumerable: true, get: function () { return tipo_documento_1.tipo_documento; } });
const tipo_factura_1 = require("./tipo_factura");
Object.defineProperty(exports, "tipo_factura", { enumerable: true, get: function () { return tipo_factura_1.tipo_factura; } });
const tipo_moneda_1 = require("./tipo_moneda");
Object.defineProperty(exports, "tipo_moneda", { enumerable: true, get: function () { return tipo_moneda_1.tipo_moneda; } });
const tipo_movimientos_inventario_1 = require("./tipo_movimientos_inventario");
Object.defineProperty(exports, "tipo_movimientos_inventario", { enumerable: true, get: function () { return tipo_movimientos_inventario_1.tipo_movimientos_inventario; } });
const usuarios_1 = require("./usuarios");
Object.defineProperty(exports, "usuarios", { enumerable: true, get: function () { return usuarios_1.usuarios; } });
function initModels(sequelize) {
    const bitacora_seguridad = bitacora_seguridad_1.bitacora_seguridad.initModel(sequelize);
    const categorias = categorias_1.categorias.initModel(sequelize);
    const clientes = clientes_1.clientes.initModel(sequelize);
    const config_notificaciones = config_notificaciones_1.config_notificaciones.initModel(sequelize);
    const descuentos = descuentos_1.descuentos.initModel(sequelize);
    const detalles_factura = detalles_factura_1.detalles_factura.initModel(sequelize);
    const detalles_orden_compra = detalles_orden_compra_1.detalles_orden_compra.initModel(sequelize);
    const facturas = facturas_1.facturas.initModel(sequelize);
    const historial_logueos = historial_logueos_1.historial_logueos.initModel(sequelize);
    const historial_password = historial_password_1.historial_password.initModel(sequelize);
    const impuestos = impuestos_1.impuestos.initModel(sequelize);
    const informacion_sistema = informacion_sistema_1.informacion_sistema.initModel(sequelize);
    const inventarios = inventarios_1.inventarios.initModel(sequelize);
    const metodo_pago = metodo_pago_1.metodo_pago.initModel(sequelize);
    const movimientos_inventario = movimientos_inventario_1.movimientos_inventario.initModel(sequelize);
    const objetos = objetos_1.objetos.initModel(sequelize);
    const ordenes_compra = ordenes_compra_1.ordenes_compra.initModel(sequelize);
    const parametros_sistema = parametros_sistema_1.parametros_sistema.initModel(sequelize);
    const permisos = permisos_1.permisos.initModel(sequelize);
    const productos = productos_1.productos.initModel(sequelize);
    const proveedores = proveedores_1.proveedores.initModel(sequelize);
    const roles = roles_1.roles.initModel(sequelize);
    const tipo_cliente = tipo_cliente_1.tipo_cliente.initModel(sequelize);
    const tipo_documento = tipo_documento_1.tipo_documento.initModel(sequelize);
    const tipo_factura = tipo_factura_1.tipo_factura.initModel(sequelize);
    const tipo_moneda = tipo_moneda_1.tipo_moneda.initModel(sequelize);
    const tipo_movimientos_inventario = tipo_movimientos_inventario_1.tipo_movimientos_inventario.initModel(sequelize);
    const usuarios = usuarios_1.usuarios.initModel(sequelize);
    productos.belongsTo(categorias, { as: "categorium", foreignKey: "categoria_id" });
    categorias.hasMany(productos, { as: "productos", foreignKey: "categoria_id" });
    facturas.belongsTo(clientes, { as: "cliente", foreignKey: "cliente_id" });
    clientes.hasMany(facturas, { as: "facturas", foreignKey: "cliente_id" });
    facturas.belongsTo(descuentos, { as: "descuento", foreignKey: "descuento_id" });
    descuentos.hasMany(facturas, { as: "facturas", foreignKey: "descuento_id" });
    detalles_factura.belongsTo(facturas, { as: "factura", foreignKey: "factura_id" });
    facturas.hasMany(detalles_factura, { as: "detalles_facturas", foreignKey: "factura_id" });
    facturas.belongsTo(metodo_pago, { as: "metodo_pago", foreignKey: "metodo_pago_id" });
    metodo_pago.hasMany(facturas, { as: "facturas", foreignKey: "metodo_pago_id" });
    permisos.belongsTo(objetos, { as: "objeto", foreignKey: "objeto_id" });
    objetos.hasMany(permisos, { as: "permisos", foreignKey: "objeto_id" });
    detalles_orden_compra.belongsTo(ordenes_compra, { as: "orden_compra", foreignKey: "orden_compra_id" });
    ordenes_compra.hasMany(detalles_orden_compra, { as: "detalles_orden_compras", foreignKey: "orden_compra_id" });
    detalles_factura.belongsTo(productos, { as: "producto", foreignKey: "producto_id" });
    productos.hasMany(detalles_factura, { as: "detalles_facturas", foreignKey: "producto_id" });
    detalles_orden_compra.belongsTo(productos, { as: "producto", foreignKey: "producto_id" });
    productos.hasMany(detalles_orden_compra, { as: "detalles_orden_compras", foreignKey: "producto_id" });
    inventarios.belongsTo(productos, { as: "producto", foreignKey: "producto_id" });
    productos.hasMany(inventarios, { as: "inventarios", foreignKey: "producto_id" });
    movimientos_inventario.belongsTo(productos, { as: "producto", foreignKey: "producto_id" });
    productos.hasMany(movimientos_inventario, { as: "movimientos_inventarios", foreignKey: "producto_id" });
    ordenes_compra.belongsTo(proveedores, { as: "proveedor", foreignKey: "proveedor_id" });
    proveedores.hasMany(ordenes_compra, { as: "ordenes_compras", foreignKey: "proveedor_id" });
    permisos.belongsTo(roles, { as: "rol", foreignKey: "rol_id" });
    roles.hasMany(permisos, { as: "permisos", foreignKey: "rol_id" });
    usuarios.belongsTo(roles, { as: "rol", foreignKey: "rol_id" });
    roles.hasMany(usuarios, { as: "usuarios", foreignKey: "rol_id" });
    clientes.belongsTo(tipo_cliente, { as: "tipo_cliente_tipo_cliente", foreignKey: "tipo_cliente" });
    tipo_cliente.hasMany(clientes, { as: "clientes", foreignKey: "tipo_cliente" });
    proveedores.belongsTo(tipo_cliente, { as: "tipo_cliente_tipo_cliente", foreignKey: "tipo_cliente" });
    tipo_cliente.hasMany(proveedores, { as: "proveedores", foreignKey: "tipo_cliente" });
    clientes.belongsTo(tipo_documento, { as: "id_tipo_documento_tipo_documento", foreignKey: "id_tipo_documento" });
    tipo_documento.hasMany(clientes, { as: "clientes", foreignKey: "id_tipo_documento" });
    proveedores.belongsTo(tipo_documento, { as: "tipo_documento_tipo_documento", foreignKey: "tipo_documento" });
    tipo_documento.hasMany(proveedores, { as: "proveedores", foreignKey: "tipo_documento" });
    facturas.belongsTo(tipo_factura, { as: "tipo_factura", foreignKey: "tipo_factura_id" });
    tipo_factura.hasMany(facturas, { as: "facturas", foreignKey: "tipo_factura_id" });
    ordenes_compra.belongsTo(tipo_moneda, { as: "tipo_moneda", foreignKey: "tipo_moneda_id" });
    tipo_moneda.hasMany(ordenes_compra, { as: "ordenes_compras", foreignKey: "tipo_moneda_id" });
    bitacora_seguridad.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id" });
    usuarios.hasMany(bitacora_seguridad, { as: "bitacora_seguridads", foreignKey: "usuario_id" });
    historial_logueos.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id" });
    usuarios.hasMany(historial_logueos, { as: "historial_logueos", foreignKey: "usuario_id" });
    historial_password.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id" });
    usuarios.hasMany(historial_password, { as: "historial_passwords", foreignKey: "usuario_id" });
    movimientos_inventario.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id" });
    usuarios.hasMany(movimientos_inventario, { as: "movimientos_inventarios", foreignKey: "usuario_id" });
    return {
        bitacora_seguridad: bitacora_seguridad,
        categorias: categorias,
        clientes: clientes,
        config_notificaciones: config_notificaciones,
        descuentos: descuentos,
        detalles_factura: detalles_factura,
        detalles_orden_compra: detalles_orden_compra,
        facturas: facturas,
        historial_logueos: historial_logueos,
        historial_password: historial_password,
        impuestos: impuestos,
        informacion_sistema: informacion_sistema,
        inventarios: inventarios,
        metodo_pago: metodo_pago,
        movimientos_inventario: movimientos_inventario,
        objetos: objetos,
        ordenes_compra: ordenes_compra,
        parametros_sistema: parametros_sistema,
        permisos: permisos,
        productos: productos,
        proveedores: proveedores,
        roles: roles,
        tipo_cliente: tipo_cliente,
        tipo_documento: tipo_documento,
        tipo_factura: tipo_factura,
        tipo_moneda: tipo_moneda,
        tipo_movimientos_inventario: tipo_movimientos_inventario,
        usuarios: usuarios,
    };
}
