import HttpStatus from '../Base/HttpStatus'

export default class RouteHelper {
    static processResponse(res : any, httpStatus: HttpStatus<any>) {
        res.writeHead(httpStatus.code, httpStatus.message, { "Content-Type": "application/json" });
        res.write(JSON.stringify(httpStatus.entity, null, 2));
        res.end();
    }
    static processErrorResponse(res : any, err: any) {
        if(err.code == undefined && err.message != undefined){
            res.writeHead(400, err.message, { "Content-Type": "text/html" });
            res.write(JSON.stringify(err.message));
            res.end();
        }
        else if (err.code == undefined && err.message == undefined){
            res.writeHead(500, "Server Error", { "Content-Type": "text/html" });
            res.write("Failed to get, create or update " + ". Check parameters are correct.");
            res.end();
        }
        else {
            res.writeHead(err.code, err.message, { "Content-Type": "text/html" });
            res.write("Failed to get, create or update " + ". Check parameters are correct.");
            res.write(JSON.stringify(err));
            res.end();
        }
    }
    static noAccessToRoute(res: any, err: any) {
        let httpStatus = new HttpStatus(HttpStatus.UNAUTHORISED, null);
        res.writeHead(httpStatus.code, httpStatus.message, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(err));
        res.end();
    }
}