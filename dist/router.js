"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bookModel_1 = require("./models/bookModel");
class Router {
    // public boduParser;
    constructor(server) {
        // this.bodyParser = new bodyParser()
        this.db = mongoose.connect('mongodb://localhost:27017/bookAPI');
        const bookRouter = express.Router();
        bookRouter.get('/Books', (req, res) => {
            // var query = {query: String};
            // var query = {title: String/*, author: String, genre: String/*, read: Boolean*/};
            // if(req.query.author) {
            //     query.author = req.query.author;
            // // } 
            // if(req.query.genre) {
            //     query.genre = req.query.genre;
            // } 
            // if(req.query.read) {
            //     query.read = req.query.read;
            // }             
            bookModel_1.default.find(/*query,*/ (err, books) => {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.send(books);
                }
            });
        });
        bookRouter.post('/Books', (req, res) => {
            var book = new bookModel_1.default(req.body);
            console.log(book);
            // req.send(book);
        });
        bookRouter.get('/Books/:bookId', (req, res) => {
            bookModel_1.default.findById(req.params.bookId, (err, book) => {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.send(book);
                }
            });
        });
        bookRouter.get('/', (req, res) => {
            res.json({ msg: "Hello everyone!" });
        });
        // Book.create({ title: "Biography", author: "Paulo Coello", genre: "documentary", read: true})
        server.use('/', bookRouter);
        server.use(bodyParser.urlencoded({ extended: true }));
        server.use(bodyParser.json());
    }
}
exports.default = Router;
//# sourceMappingURL=router.js.map