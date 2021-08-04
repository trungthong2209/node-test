import * as express from "express";
import AuthenticationHelper from '../Helpers/Authencation'
import HttpStatus from "../Base/HttpStatus";
import RouteHelper from '../Helpers/RouteHelper'
import LoginService from "../Services/LoginService";
const router = express.Router();

router.post("/", async (req: express.Request, res: express.Response) => {
      let user = req.body;
      let loginService = new LoginService();
      loginService.login(user).then((httpStatus)=>{
          RouteHelper.processResponse(res, httpStatus);
      })
      .catch((err) => {
        RouteHelper.processErrorResponse(res, err);
      });

});

export default router;