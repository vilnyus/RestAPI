"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Model {
    constructor() {
        this.Schema = mongoose.Schema;
        this.bookModel = new this.Schema({
            title: {
                type: String
            },
            author: {
                type: String
            },
            genre: {
                type: String
            },
            read: {
                type: Boolean,
                default: false
            }
        });
    }
    ;
}
;
var bookModelCollection = new Model;
exports.default = mongoose.model('Book', bookModelCollection.bookModel);
//# sourceMappingURL=bookModel.js.map