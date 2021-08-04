import EventsRepository from "../Repositories/EventsRepository";
import Events from "../Model/Events";
import Pagination from "../Base/Pagination"
it("test the event create feature valid", async () => {
         let events = new Events();
         events.eventName = "hom nay la mot ngay nang";
         events.description = "40 do C";
         events.dueDate = new Date("10-10-2020");
         events.startDate = new Date("10-11-2020");
         const response = await EventsRepository.create(events);
         expect(response).toEqual(true);
}, 30000);

//description is empty
it("test the event create feature invalid", async () => {
  
   let events = new Events();
   events.eventName = "hom nay la mot ngay nang";
   events.dueDate = new Date("10-10-2020");
   events.startDate = new Date("10-11-2020");
   const response = await EventsRepository.create(events);
   expect(response).toEqual(false);
}, 30000);

//Update all
it("test the event update feature", async () => {
   let events = new Events()
   let id =  "610a1a4ca1a9aa3100a854ba"
   events.eventName = "hom nay la mot ngay nang";
   events.description = "40 C";
   events.dueDate = new Date("10-10-2020");
   events.startDate = new Date("10-11-2020");
   const response = await EventsRepository.update(id, events);
   expect(response).toEqual(true);

}, 30000);

//Update only field
it("test the event update feature", async () => {
   let events = new Events()
   let id =  "610a1a4ca1a9aa3100a854ba"
   events.eventName = "hom nay la mot ngay nang";
   const response = await EventsRepository.update(id, events);
   expect(response).toEqual(true);

}, 30000);

//Update only date field 
it("test the event update feature", async () => {
   let events = new Events()
   let id =  "610a1a4ca1a9aa3100a854ba"
   events.dueDate = new Date("10-10-2020");
   events.startDate = new Date("10-11-2020");
   const response = await EventsRepository.update(id, events);
   expect(response).toEqual(true);
}, 30000);

//Delete record
it("test the event delete feature id valid", async () => {
   let id =  "610a1a4ca1a9aa3100a854ba"
   const response = await EventsRepository.delete(id);
   expect(response).toEqual(true);
}, 30000);

//Delete record
it("test the event delete feature invalid id", async () => {
   let id =  "0000000000000000"
   const response = await EventsRepository.delete(id);
   expect(response).toEqual(false);
}, 30000);

//get records
it("get all events true", async () => {
   let pageNumber = 1;
   let pageSize = 10;
   const response = await EventsRepository.getAll(pageNumber, pageSize);
   expect(typeof response).toEqual(Array);
}, 30000);

//get records
it("get all events invalid", async () => {
   let pageNumber = 0;
   let pageSize = 0;
   const response = await EventsRepository.getAll(pageNumber, pageSize);
   expect(typeof response).toEqual(Array);
}, 30000);


