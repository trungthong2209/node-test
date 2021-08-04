'use strict';
import mongoose from 'mongoose';
import BaseObj from '../Base/BaseObj';

export default class MongoHelper extends BaseObj{
      static async Initialise() : Promise<void> {
          try {
              mongoose.connect(process.env.DATABASE_URL, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        useCreateIndex: true,
                        useFindAndModify: false
                 }).then((serverDB) => {
                           console.log("Initialising Database ")
                 }).catch((err) => {
                        console.log("Database connected fail:" + err)
                        throw err;
                 });
          } catch (error) {
              console.log("ERROR Connecting To Mongo Server");    
              throw error;
          }
          mongoose.connection.on("disconnect", () => {
              console.log("Disconnect To Mongo Server");  
          })
   }
};