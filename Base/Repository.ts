'use strict';
import { IRepository } from "./Interfaces/IRepository";
import mongoose from 'mongoose';
export default abstract class Repository<T> implements IRepository<T> {

    private readonly _model: mongoose.Model<mongoose.Document>;;

    constructor(schemaModel: mongoose.Model<mongoose.Document>)
    {
        this._model = schemaModel
    }
    create(entity: T): Promise<boolean> {
        let promise = new Promise<boolean>((resolve, reject) => {
            this._model.create(entity).then(()=>{
                resolve(true)
            })
            .catch((error)=>{
                reject(false);
            })
        })
        return promise;
    }
    update(id: string, entity: T): Promise<boolean> {
        let promise = new Promise<boolean>((resolve, reject) => {
            this._model.findOneAndUpdate({_id: id, entity}).then(()=>{
                resolve(true)
            })
            .catch((error)=>{
                reject(false);
            })
        })
        return promise;
    }
    delete(id: string): Promise<boolean> {
        let promise = new Promise<boolean>((resolve, reject) => {
            this._model.findOneAndDelete({_id: id}).then(()=>{
                resolve(true)
            })
            .catch((error)=>{
                reject(false);
            })
        })
        return promise;
    }
    get(id: string): Promise<T> {
        let promise = new Promise<T>((resolve, reject) => {
            this._model.findOne({_id: id}).then((doc : any) => {
                resolve(doc);
            })
            .catch((error)=>{
                reject(error);
            })
        })
        return promise;
    }
    // private static toObjectId(id: string) : mongoose.Types.ObjectId 
    // {
    //     return mongoose.Types.ObjectId.createFromHexString(id);
    // }
}