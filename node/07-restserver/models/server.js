const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/oregon/usuarios';

        this.middlewares();

        this.routes();

    }

    middlewares() {

        this.app.use( cors());

        //lectura y parseo del body de al info que venga
        this.app.use (express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Ahi va por el ', this.port)
        });
    }
}

module.exports = Server;