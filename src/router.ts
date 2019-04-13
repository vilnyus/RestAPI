import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import Book from './models/bookModel';

class Router {
    public db;
    // public boduParser;
    constructor(server: express.Express) {
        // this.bodyParser = new bodyParser()
        this.db = mongoose.connect('mongodb://localhost:27017/bookAPI');
        const bookRouter = express.Router();
        bookRouter.get('/Books', (req: express.Request, res: express.Response) => {
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
            Book.find(/*query,*/ (err, books)=>{
                if(err) {
                    res.status(500).send(err);
                } 
                else {
                    res.send(books);
                }
            });
        });
        bookRouter.post('/Books', (req: express.Request, res: express.Response)=>{
            var book = new Book(req.body);
            console.log(book);
            // req.send(book);
        });

        bookRouter.get('/Books/:bookId', (req: express.Request, res: express.Response) => {
            Book.findById(req.params.bookId, (err, book)=>{
                if(err) {
                    res.status(500).send(err);
                } 
                else {
                    res.send(book);
                }
            });
        });

        bookRouter.get('/', (req: express.Request, res: express.Response) => {
            res.json({msg: "Hello everyone!"});
        }); 
        // Book.create({ title: "Biography", author: "Paulo Coello", genre: "documentary", read: true})
        server.use('/', bookRouter);
        server.use(bodyParser.urlencoded({extended : true}));
        server.use(bodyParser.json());
    }    
}
export default Router;