import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import Usuario from '../models/usuarios';
import jwt from 'jsonwebtoken';
import { Roles } from '../models/roles';

export const getRoles = async(req: Request, res: Response) => {

    // Obtener todos los roles de la DBA

    try {
        const getAllRoles = await Roles.findAll({});
        res.json(
            getAllRoles
        );
    } catch (error) {
        console.error("Error al obtener los roles:", error);
        res.status(500).json({
            msg: "Ocurrió un error al obtener los roles. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
}

export const getRolesActivos = async(req: Request, res: Response) => {
    try{
        const getRolesActivos = await Roles.findAll({
            where: {estado: 1}
        });
            res.json(
            getRolesActivos
        );
    }
    catch (error){
        console.error("Error al obtener los roles activos:", error);
        res.status(500).json({
            msg: "Ocurrió un error al obtener los roles activos. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
}

export const nuevoRol = async (req: Request, res: Response) => {
    const {
        nombre_rol,
        descripcion,
        creado_por,
        modificado_por,
        fecha_modificacion,
        estado
    } = req.body;

    try {
        // Validar si el rol ya existe (por nombre)
        const rolExistente = await Roles.findOne({
            where: { nombre_rol: nombre_rol }
        });

        if (rolExistente) {
            res.status(400).json({
                msg: `El rol '${nombre_rol}' ya existe.`,
            });
            return;
        }

        // Crear el nuevo rol
        const nuevoRol = await Roles.create({
            nombre_rol: nombre_rol.toUpperCase(),
            descripcion: descripcion.toUpperCase(),
            creado_por: creado_por.toUpperCase(),
            modificado_por: modificado_por.toUpperCase(),
            fecha_modificacion: fecha_modificacion,
            estado: estado
        });

        res.status(201).json({
            msg: `Rol '${nombre_rol}' creado exitosamente.`,
            rol: nuevoRol
        });

    } catch (error) {
        console.error("Error al crear el rol:", error);
        res.status(500).json({
            msg: "Ocurrió un error al crear el rol.",
            error: error instanceof Error ? error.message : "Error desconocido"
        });
    }
};