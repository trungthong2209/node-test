import  BaseObj  from './BaseObj';

export default class BaseEntity<T> extends BaseObj {    
    constructor() {
        super();
    }
    public static newObjectId(): string {
        let objectStr = 'xxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        return objectStr;
    }
    
    public newInstance() : any{
        return null; //new BaseEntity<T>(); //must be overriden as class is not constructed correctly currently in TS.
    }
    public assign(object: BaseEntity<T>){
        //must be overwritten in implmnenting class as TS does not currently do proper refection..     
    }
    public clone(): any {
        let newObject = this.newInstance();
        newObject.assign(this);
        return newObject ;
    }
    /**
     * Returns whether this is running on the UI or API.
     */
    public isUI(): boolean {
        return !(typeof window === 'undefined');
    }
}