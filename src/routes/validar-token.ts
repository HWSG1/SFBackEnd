import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'

const validarToken = (req: Request, res: Response, next: NextFunction) =>{
    //Obtener el encabezado del token
    const headerToken = req.headers['authorization']
    if (headerToken != undefined && headerToken.startsWith('Bearer ')){
        try {
            //obtener token
            const bearerToken = headerToken.slice(7);
            //Validar token
            const validar = jwt.verify(bearerToken, process.env.JWT_SECRET || 'Lamers005*' );
            next();
        } catch (error) {
            res.status(401).json({
                msg: "Token inválido"
            })
        }
    }else{
        res.status(401).json({
            msg: "Acceso denegado",
        })
    }
    
}

export default validarToken;