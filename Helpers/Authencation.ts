'use strict';
import jwt from "jsonwebtoken";
import HttpStatus from '../Base/HttpStatus';
import Constants  from "../Base/Constants";
import User from '../Model/User'
export default class Authentication {
    static checkAccess(req: any): Promise<HttpStatus<User>> {
        let promise = new Promise<HttpStatus<User>>((resolve, reject) => {
            let token = req.headers['x-wfg-token'];
            if (token) {
                jwt.verify(token, process.env.AUTH0_APP_SECRET, (err: Error, decoded: any) => {
                    if (err) {
                        let rejectStatus = new HttpStatus<User>(HttpStatus.NOT_ACCEPTABLE, null);
                        rejectStatus.message = err.message;
                        reject(rejectStatus);
                    }
                    else {
                        if (decoded._id) {
                            let httpStatus = new HttpStatus<User>(HttpStatus.OK, decoded);
                            httpStatus.message = Constants.AUTHORIZATED;
                            resolve(httpStatus);
                        }
                        else {
                            let rejectStatus = new HttpStatus(HttpStatus.UNAUTHORISED, null);
                            rejectStatus.message = Constants.UNAUTHORISED;
                            reject(rejectStatus);
                        }
                    }
                })
            }
            else {
                let rejectStatus = new HttpStatus(HttpStatus.UNAUTHORISED, null);
                rejectStatus.message = Constants.INVALID_TOKEN;
                reject(rejectStatus);
            }
        });
        return promise;
}
}