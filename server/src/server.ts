import express from 'express'
import session from 'express-session'
import morgan from 'morgan'
import cors from 'cors'
import apiRoutes from './routes/index'
import { errorHandler, notFound } from './middlewares';
import run from './db'
import * as dotenv from 'dotenv'
dotenv.config()

class Server {
    public port = process.env.PORT || 8080;
    public app: express.Application;
    protected  sessionOptions = {
        secret:  process.env.SECRET_TOKEN ||  'keyboard cat',
        resave: false,
        saveUninitialized: true,
    }

    constructor() {
       this.app = express();
       this.app.use(session(this.sessionOptions))
       this.app.use(morgan('tiny'))
       this.app.use(cors())
       this.app.use(express.json())
       this.app.use(express.urlencoded({extended: true}))
       this.database();
       this.rootPath()
       this.routes()
       this.middlewares();
    }

    // GET /
    protected rootPath(): void {
        this.app.get('/', (req, res) => {
            res.json({
                message: 'Hi World'
            })
        })
    }

    public routes(): void {
        this.app.use('/api/v1', apiRoutes)
    }

    protected middlewares(): void {
        this.app.use(notFound);
        this.app.use(errorHandler)
    }

    protected database(): void {
        run()
        .then(() => {
            console.log(`Connected to ${process.env.MONGODB}`);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Listening at http://localhost:${this.port}`);
        })
    }
}

export default Server;