import express, {Application} from 'express';
import routesProductos from '../routes/products.router';
import routesUsuarios from '../routes/usuario.router';
import sequelize from '../database/connection';
import cors from 'cors';

class Server {
private app: Application;
private port: string | undefined;

    constructor(){
        console.log('Iniciando constructor en el server');
        this.app = express();
        this.port = process.env.PORT || '3001';
        console.log('Constructor OK');
        this.listen();
        this.mildwares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('App corriendo en el puerto: '+ this.port)
        });
    }
    routes(){
        this.app.use('/api/productos', routesProductos);
        this.app.use('/api/usuarios', routesUsuarios);
    }
    mildwares(){
        this.app.use(express.json());
        const allowedOrigin = process.env.HOST;
        this.app.use(cors({
            origin: allowedOrigin
        }));
    }
    async dbConnect(){
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server