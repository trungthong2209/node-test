import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import createError from "http-errors"

let app = express();
dotenv.config();

import MongoHepler from "./Helpers/MongoHelper"
//import routes
import Event from './Routes/Events';
import Login from './Routes/Login'

app.use(cors());
app.use(express.json({limit: "16mb"}));
app.use(express.urlencoded({ extended: true, limit: "16mb" }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers", "userid, authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });

MongoHepler.Initialise();

app.get("/", async (req: any, res: any) => {
    res.write('DOAN TRUNG THONG');
    res.end();
});
app.use('/events', Event);
app.use('/logins', Login);
app.use(function (req, res, next) {
    next(createError(404));
});
const PORT: number = 3000;
app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
})

module.exports = app;