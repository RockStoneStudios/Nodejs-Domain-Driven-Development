import express, { Application , Request,Response} from 'express'
import dotenv from 'dotenv';
import DB from './src/Actor/Infrastructre/DB/db.connection';
import ceoRouter from './src/Actor/Infrastructre/Routes/ceo.routers';

class Server {
    private app: Application = express.application;
    private port :any = 3001;
    private apiPath = {
         ceos : '/api/ceos'
    }

    constructor(){
        dotenv.config();
        this.app = express();
        this.port = process.env.PORT || 3001;
        this.Middlewares();
        this.Routes();
        this.DbInit();
        this.Listen();
    }

    //Middlewares
    public Middlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended :false}));
        
    }

    public DbInit () {
        DB;
    }

    // Routes
     public Routes() {
        this.app.use(this.apiPath.ceos,ceoRouter);
     }


    //Starting Server

    public Listen(){
        this.app.listen(this.port,()=>{
            console.log('Starting Server on Port --> '+this.port);
        })
    }



}


new Server()
