import HttpStatus from "../Base/HttpStatus"
import Events from '../Model/Events'
import EventsRepository from '../Repositories/EventsRepository'
import Pagination from "../Base/Pagination"
export default class EventService {
  //pageSize: number, pageNumber: number
  public getAllEvents(pagination: Pagination): Promise<HttpStatus<Array<Events>>> {
    let promise = new Promise<HttpStatus<Array<Events>>>((resolve, reject) => {
      EventsRepository.getAll(pagination.pageNumber, pagination.pageSize).then((listEvent)=>{
        let httpStatus = new HttpStatus<Array<Events>>(HttpStatus.OK, listEvent);
        resolve(httpStatus);
      })
      .catch((err: Error) => {
          reject(HttpStatus.getHttpStatus(err));
      });
    });
    return promise;
  }
  public insertEvent(body: Events): Promise<HttpStatus<Events>> {
    let promise = new Promise<HttpStatus<Events>>((resolve, reject) => {
      EventsRepository.create(body).then((bool) => {
        let httpStatus = new HttpStatus<Events>(HttpStatus.CREATED, body);
        resolve(httpStatus);
      })
        .catch((err: Error) => {
          reject(HttpStatus.getHttpStatus(err));
        });
    });
    return promise;
  }
  public deleteEvent(id: string): Promise<HttpStatus<Boolean>> {
    let promise = new Promise<HttpStatus<Boolean>>((resolve, reject) => {
      EventsRepository.delete(id).then((bool) => {
        let httpStatus = new HttpStatus<Boolean>(HttpStatus.OK, true);
        resolve(httpStatus);
      })
        .catch((err: Error) => {
          reject(HttpStatus.getHttpStatus(err));
        });
    });
    return promise;
  }
  public updateEvent(id: string, body: Events): Promise<HttpStatus<Events>> {
    let promise = new Promise<HttpStatus<Events>>((resolve, reject) => {
      EventsRepository.update(id, body).then((bool) => {
        console.log(bool)
        let httpStatus = new HttpStatus<Events>(HttpStatus.OK, body);
        resolve(httpStatus);
      })
        .catch((err: Error) => {
          reject(HttpStatus.getHttpStatus(err));
        });
    });
    return promise;
  }
}