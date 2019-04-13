import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import Router from './router';
// import Book from './models/bookModel';


class App {
  public express;
  // public db;

  constructor () {
    this.express = express();
    // this.express.use(bodyParser.json);
    // this.express.use(bodyParser.urlencoded({ extended : true}));    
    
    new Router(this.express);
  }
}

export default new App().express