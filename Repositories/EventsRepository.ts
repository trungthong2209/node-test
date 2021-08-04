'use strict';
import  Repository  from '../Base/Repository';
import Events  from '../Model/Events';
import EventsManager from '../Model/Manager/EventsManager';
export default class EventsRepository extends Repository<Events> {

  static create(entity: Events): Promise<boolean> {
        let promise = new Promise<boolean>((resolve, reject) => {
            EventsManager.create(entity).then(()=>{
                resolve(true)
            })
            .catch((error)=>{
                reject(false);
            })
        })
        return promise;
    }
    static  update(id: string, entity: Events): Promise<boolean> {
        let promise = new Promise<boolean>((resolve, reject) => {
            EventsManager.findOne({_id: id}).then((events) => {
                if(events != null) {
                    events.updateOne(entity).then(()=>{
                        resolve(true)
                    })
                    .catch((error)=>{
                        reject(false);
                    })
                }
                else {
                    reject(false);
                }
            })
            .catch((error)=>{
                reject(false);
            })
        })
        return promise;
    }
    static delete(id: string): Promise<boolean> {
        let promise = new Promise<boolean>((resolve, reject) => {
            EventsManager.findOneAndDelete({_id: id}).then(()=>{
                resolve(true)
            })
            .catch((error)=>{
                reject(false);
            })
        })
        return promise;
    }
    static  get(id: string): Promise<Events> {
        let promise = new Promise<Events>((resolve, reject) => {
            EventsManager.findOne({_id: id}).then((doc: Events) => {
                resolve(doc);
            })
            .catch((error)=>{
                reject(error);
            })
        })
        return promise;
    }
    static  getAll(n: number, pageSize: number): Promise<Array<Events>> {
        let promise = new Promise<Array<Events>>((resolve, reject) => {
            let pipeList = [];
            pipeList.push(
              {
                $project: {
                  _id: 1,
                  eventName: 1,
                  startDate: 1,
                  dueDate: 1,
                  description: 1,
                }
              },
              { 
                  $sort: { startDate: 1 } 
              },
              {
                $skip: (n-1) * pageSize
              },
              {
                $limit: pageSize
              }
            )
            EventsManager.aggregate(pipeList).then((listEvent: Array<Events>) => {
                resolve(listEvent);
            })
            .catch((error: Error) => {
                reject(error);
            })
        })
        return promise;
    }
}