import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import Usuario from '../models/usuarios';
import jwt from 'jsonwebtoken';


export const getUsuarios = async(req: Request, res: Response) => {

    // Obtener todos los usuarios de la DBA

    try {
        const getAllUsuarios = await Usuario.findAll({});
        res.json(
            getAllUsuarios
        );
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({
            msg: "Ocurrió un error al obtener los usuarios. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
}

export const getUsuariosActivos = async(req: Request, res: Response) => {

    // Obtener todos los usuarios de la DBA

    try {
        const getAllUsuarios = await Usuario.findAll({
            where: {estado: 1}
        });
        res.json(
            getAllUsuarios
        );
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({
            msg: "Ocurrió un error al obtener los usuarios. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
}

export const getUsuariosInactivos = async(req: Request, res: Response) => {

    // Obtener todos los usuarios de la DBA

    try {
        const getAllUsuarios = await Usuario.findAll({
            where: {estado: 2}
        });
        res.json(
            getAllUsuarios
        );
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({
            msg: "Ocurrió un error al obtener los usuarios. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
}

export const nuevoUsuario = async(req: Request, res: Response) => {
    //creación del objeto con las propiedades de la tabla de usuarios de la base de datos
    const {
        usuario_id,
        rol_id,
        nombre_usuario,
        password,
        email,
        fecha_ultimo_acceso,
        fecha_ultimo_cambio_password,
        intentos_fallidos,
        vigencia_dias,
        creado_por,
        fecha_creacion,
        modificado_por,
        fecha_modificacion,
        estado
    } = req.body;

    // Verificar si el usuario ya existe
    const usuarioExistente = await Usuario.findOne({
        where: { nombre_usuario: nombre_usuario }
    });

    try {
        if (usuarioExistente) {
            res.status(400).json({
                msg: `El usuario ${nombre_usuario} no se puede registrar debido a que ya existe.`,
            });
            return; // Termina la ejecución de la función debido a que el usuario es existente
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        Usuario.create({
            usuario_id: usuario_id,
            rol_id: rol_id,
            nombre_usuario: nombre_usuario,
            password: hashedPassword,
            email: email,
            fecha_ultimo_acceso: fecha_ultimo_acceso,
            fecha_ultimo_cambio_password: fecha_ultimo_cambio_password,
            intentos_fallidos: intentos_fallidos,
            vigencia_dias: vigencia_dias,
            creado_por: creado_por,
            fecha_creacion: fecha_creacion,
            modificado_por: modificado_por,
            fecha_modificacion: fecha_modificacion,
            estado: estado
        })
        res.json({
            msg: `Usuario creado ${nombre_usuario} exitosamente`,
        });
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({
            msg: "Ocurrió un error al crear el usuario. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
}


export const loginUsuario = async (req: Request, res: Response) => {
    const { 
        nombre_usuario, 
        password 
    } = req.body;

    try {
        // Verificar si el usuario existe en la base de datos
        const usuario: any = await Usuario.findOne({
            where: { nombre_usuario: nombre_usuario }
        });

        if (!usuario) {
            res.status(400).json({
                msg: "Usuario no existe"
            });
            return;
        }

        // Comparar la contraseña proporcionada con la almacenada en la base de datos
        const match = await bcrypt.compare(password, usuario.password);
        

        if (!match) {
            res.status(400).json({
                msg: "Contraseña incorrecta"
            });
            return;
        }else{console.log('Contraseña correcta')};

        // Crear un JWT (Json Web Token)
        const payload = {
            nombre_usuario: usuario.nombre_usuario
        };

        // Firma del token con la clave secreta y con una expiración de 1 hora
        const token = jwt.sign(payload, (process.env.JWT_SECRET || 'Lamers005*'), { expiresIn: '1h' });

        // Responder con el token
        res.json({
            msg: "Login exitoso",
            token
        });

    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({
            msg: "Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo.",
            error: error instanceof Error ? error.message : "Error desconocido"
        });
    }
};