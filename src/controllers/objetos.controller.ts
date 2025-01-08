import {Request, Response} from 'express';
import { Objetos } from '../models/objetos';

export const getObjetos = async(req: Request, res: Response) => {
    try {
        const getAllObjetos = await Objetos.findAll({});
        res.json(
            getAllObjetos
        );
    } catch (error) {
        console.error("Error al listar objetos:", error);
        res.status(500).json({
            msg: "Ocurrió un error al buscar los objetos. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
}
export const getObjetosActivos = async(req: Request, res: Response) => {
    try {
        const getAllObjetos = await Objetos.findAll({
            where: {estado: 1}
        });
        res.json(
            getAllObjetos
        );
    } catch (error) {
        console.error("Error al listar objetos:", error);
        res.status(500).json({
            msg: "Ocurrió un error al buscar los objetos. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
}
export const getObjetosSidebar = async (req: Request, res: Response) => {
    try {
        const getAllObjetos = await Objetos.findAll({
            where: {
                estado: 1,
                tipo: "sidebar"
            }
        });

        // Ordenar los resultados manualmente
        const order = ['Dashboard', 'Ventas', 'Compras', 'Reportes'];
        const orderedObjetos = getAllObjetos.sort((a, b) => {
            return order.indexOf(a.get('nombre_objeto') as string) - order.indexOf(b.get('nombre_objeto') as string);
        });

        res.json(orderedObjetos);
    } catch (error) {
        console.error("Error al listar objetos:", error);
        res.status(500).json({
            msg: "Ocurrió un error al buscar los objetos. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
};
