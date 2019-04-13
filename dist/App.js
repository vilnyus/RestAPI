"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router_1 = require("./router");
// import Book from './models/bookModel';
class App {
    // public db;
    constructor() {
        this.express = express();
        // this.express.use(bodyParser.json);
        // this.express.use(bodyParser.urlencoded({ extended : true}));    
        new router_1.default(this.express);
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map