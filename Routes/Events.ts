import * as express from "express";
import AuthenticationHelper from '../Helpers/Authencation'
import HttpStatus from "../Base/HttpStatus";
import Events from '../Model/Events';
import Users from '../Model/User';
import RouteHelper from '../Helpers/RouteHelper';
import EventService from "../Services/EventService";
const router = express.Router();

router.get("/", async (req: express.Request, res: express.Response) => {
    AuthenticationHelper.checkAccess(req).then((httpStatus: HttpStatus<Users>) => {
      let eventService = new EventService();
      let body = req.body;
      eventService.getAllEvents(body).then((eventList:  HttpStatus<Array<Events>>)=>{
        RouteHelper.processResponse(res, eventList);
      })
      .catch((err) => {
        RouteHelper.processErrorResponse(res, err);
      });
    })
    .catch((err) => {
      RouteHelper.noAccessToRoute(res, err);
    });
  });
  router.post("/", async (req: express.Request, res: express.Response) => {
    AuthenticationHelper.checkAccess(req).then((httpStatus: HttpStatus<Users>) => {
      let Events = req.body;
      let eventService = new EventService();
      eventService.insertEvent(Events)
      .then((httpStatus: HttpStatus<Events>) =>{
        RouteHelper.processResponse(res, httpStatus);
      })
      .catch((err) => {
        RouteHelper.processErrorResponse(res, err);
      });
    })
    .catch((err) => {
      RouteHelper.noAccessToRoute(res, err);
    });
  });
  router.put("/", async (req: express.Request, res: express.Response) => {
    AuthenticationHelper.checkAccess(req).then((httpStatus: HttpStatus<Users>) => {
      let body = req.body.data;
      let id = req.body.id;
      let eventService = new EventService();
      eventService.updateEvent(id, body)
        .then((httpStatus: HttpStatus<Events>) =>{
        RouteHelper.processResponse(res, httpStatus);
      })
      .catch((err) => {
        RouteHelper.processErrorResponse(res, err);
      });
    })
    .catch((err) => {
      RouteHelper.noAccessToRoute(res, err);
    });
  });
  router.delete("/", async (req: express.Request, res: express.Response) => {
    AuthenticationHelper.checkAccess(req).then((httpStatus: HttpStatus<Users>) => {
      let id = req.body.id;
      let eventService = new EventService();
      eventService.deleteEvent(id)
      .then((httpStatus: HttpStatus<Boolean>) =>{
        RouteHelper.processResponse(res, httpStatus);
      })
      .catch((err) => {
        RouteHelper.processErrorResponse(res, err);
      });
    })
    .catch((err) => {
      RouteHelper.noAccessToRoute(res, err);
    });
  });
export default router;