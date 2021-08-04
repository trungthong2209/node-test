import HttpStatus from "../Base/HttpStatus"
import User from '../Model/User';
import jwt from "jsonwebtoken";
import Constants from "../Base/Constants";
export default class LoginService {
  public login(user: User): Promise<HttpStatus<String>> {
    let promise = new Promise<HttpStatus<String>>((resolve, reject) => {
      if (user.password && user.email) {
        //Demo query 
        if (user.email === Constants.EMAIL && user.password === Constants.PWD) {
          const payload = {
            _id: "000000", email: user.email
          };
          jwt.sign(payload, process.env.AUTH0_APP_SECRET, (err, token) => {
            if (!err) {
              let httpStatus = new HttpStatus<String>(HttpStatus.OK, token);
              resolve(httpStatus);
            }
            else {
              let rejectStatus = new HttpStatus<String>(HttpStatus.UNAUTHORISED, null);
              rejectStatus.message = Constants.LOGIN_AGAIN;
              resolve(rejectStatus);
            }
          })
        }
        else {
          let rejectStatus = new HttpStatus<String>(HttpStatus.UNAUTHORISED, null);
          rejectStatus.message = Constants.LOGIN_AGAIN;
          resolve(rejectStatus);
        }
      }
      else {
        let rejectStatus = new HttpStatus<String>(HttpStatus.UNAUTHORISED, null);
        rejectStatus.message = Constants.LOGIN_AGAIN;
        resolve(rejectStatus);
      }
    });
    return promise;
  }

}