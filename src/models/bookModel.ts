import * as mongoose from 'mongoose';

class Model {
    public bookModel;
    public Schema;
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
        })
    };
};

var bookModelCollection = new Model;

export default mongoose.model('Book', bookModelCollection.bookModel);