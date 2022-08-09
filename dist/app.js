"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_connection_1 = __importDefault(require("./src/Actor/Infrastructre/DB/db.connection"));
const ceo_routers_1 = __importDefault(require("./src/Actor/Infrastructre/Routes/ceo.routers"));
class Server {
    constructor() {
        this.app = express_1.default.application;
        this.port = 3001;
        this.apiPath = {
            ceos: '/api/ceos'
        };
        dotenv_1.default.config();
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 3001;
        this.Middlewares();
        this.Routes();
        this.DbInit();
        this.Listen();
    }
    //Middlewares
    Middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    DbInit() {
        db_connection_1.default;
    }
    // Routes
    Routes() {
        this.app.use(this.apiPath.ceos, ceo_routers_1.default);
    }
    //Starting Server
    Listen() {
        this.app.listen(this.port, () => {
            console.log('Starting Server on Port --> ' + this.port);
        });
    }
}
new Server();
//# sourceMappingURL=app.js.map