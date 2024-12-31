import {Request, Response} from 'express';
import { Productos } from '../models/productos';

export const getProductos = async(req: Request, res: Response) => {
    //creación del objeto con las propiedades de la tabla de usuarios de la base de datos
    const {
        producto_id,
        codigo_producto,
        nombre,
        descripción,
        categoria_id,
        unidad_medida,
        fecha_creacion,
        creado_por,
        modificado_por,
        fecha_modificacion,
        estado,
    } = req.body;

    // Verificar si el producto ya existe


    try {
        const getAllProductos = await Productos.findAll({});
        res.json(
            getAllProductos
        );
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({
            msg: "Ocurrió un error al crear el usuario. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
}

export const getProductosActivos = async(req: Request, res: Response) => {
    try {
        const getAllProductos = await Productos.findAll({
            where: {estado: 1}
        });
        res.json(
            getAllProductos
        );
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({
            msg: "Ocurrió un error al crear el usuario. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
}

export const getProductosInactivos = async(req: Request, res: Response) => {
    try {
        const getAllProductos = await Productos.findAll({
            where: {estado: 2}
        });
        res.json(
            getAllProductos
        );
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({
            msg: "Ocurrió un error al crear el usuario. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
}