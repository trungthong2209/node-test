import EventsRepository from "../Repositories/EventsRepository";
import Events from "../Model/Events";
import Pagination from "../Base/Pagination"

jest.useFakeTimers();
it("test the event create feature valid", async () => {
   let events = new Events();
   events.eventName = "hom nay la mot ngay nang";
   events.description = "40 do C";
   events.dueDate = new Date("10-10-2020");
   events.startDate = new Date("10-11-2020");
   EventsRepository.create(events).then((bool) => {
      expect(bool).toBe(true);
   })
   .catch((err)=>{
      expect(err).toBe(false);
   })
   ;

});

//description is empty
it("test the event create feature invalid", async () => {
   let events = new Events();
   events.eventName = "hom nay la mot ngay nang";
   events.dueDate = new Date("10-10-2020");
   events.startDate = new Date("10-11-2020");
   EventsRepository.create(events).then((bool) => {
      expect(bool).toBe(false);
   })
   .catch((err)=>{
      expect(err).toBe(false);
   })
});

//Update all
it("test the event update feature", async () => {
   let events = new Events()
   let id = "610a1a4ca1a9aa3100a854ba"
   events.eventName = "hom nay la mot ngay nang";
   events.description = "40 C";
   events.dueDate = new Date("10-10-2020");
   events.startDate = new Date("10-11-2020");
   EventsRepository.update(id, events).then((bool) => {
      expect(bool).toBe(true);
   })
   .catch((err)=>{
      expect(err).toBe(false);
   })
});

//Update only field
it("test the event update feature", async () => {
   let events = new Events()
   let id = "610a1a4ca1a9aa3100a854ba"
   events.eventName = "hom nay la mot ngay nang";
   EventsRepository.update(id, events)
      .then((bool) => {
         expect(bool).toBe(true);
      })
      .catch((err)=>{
         expect(err).toBe(false);
      })

});

//Update only date field 
it("test the event update feature", async () => {
   let events = new Events()
   let id = "610a1a4ca1a9aa3100a854ba"
   events.dueDate = new Date("10-10-2020");
   events.startDate = new Date("10-11-2020");
    EventsRepository.update(id, events)   
   .then((bool) => {
      expect(bool).toBe(true);
   })
   .catch((err)=>{
      expect(err).toBe(false);
   })
   
});

//Delete record
it("test the event delete feature id valid", async () => {
   let id = "610a1a4ca1a9aa3100a854ba"
    EventsRepository.delete(id)
    .then((bool) => {
      expect(bool).toBe(true);
   })
   .catch((err)=>{
      expect(err).toBe(false);
   })
});

//Delete record
it("test the event delete feature invalid id", async () => {
   let id = "0000000000000000"
   EventsRepository.delete(id)
   .then((bool) => {
      expect(bool).toBe(false);
   })
   .catch((err)=>{
      expect(err).toBe(false);
   })
});

//get records
it("get all events true", async () => {
   let pageNumber = 1;
   let pageSize = 10;
   EventsRepository.getAll(pageNumber, pageSize)   
   .then((bool) => {
      expect(typeof bool).toBe(Array);
   })
   .catch((err)=>{
      expect(typeof err).toBe(Error);
   })
});

//get records
it("get all events invalid", async () => {
   let pageNumber = 0;
   let pageSize = 0;
   EventsRepository.getAll(pageNumber, pageSize)
   .then((bool) => {
      expect(bool).toBe(false);
   })
   .catch((err)=>{
      expect(err).toBe(false);
   })
});


