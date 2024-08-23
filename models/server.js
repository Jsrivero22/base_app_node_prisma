import express from 'express';
import cors from 'cors';

import { envs } from "../config/envs.js";
import routes from "../routes/index.js";
import { errorHandler } from '../middlewares/errorHandler.js';

export default class Server {

    constructor() {

        // Run express server and define port
        this.app = express();
        this.port = envs.PORT;

        this.pathRoutes = '/api';

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();

    }

    middlewares() {

        // Parse body
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }) );

        // CORS
        this.app.use( cors() );

        // Public directory
        this.app.use( express.static('public') );

        // Error handler
        this.app.use( errorHandler );
    }

    routes() {
        this.app.use( this.pathRoutes, routes );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

}