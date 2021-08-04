import LoginService from "../Services/LoginService";
import User from "../Model/User";
import Pagination from "../Base/Pagination"
import HttpStatus from "../Base/HttpStatus"


it("test the login function valid",  () => {
         let user = new User();
         let loginService = new LoginService();
         user.email = "doanthong";
         user.password = "123456";
       loginService.login(user).then((httpStatus) => {
            expect(httpStatus.code).toBe(HttpStatus.OK);
         })
         .catch((error)=>{
            expect(error).toBe(Error);
        })
    
});

it("test the login function invalid",  () => {
    let user = new User();
    let loginService = new LoginService();
    user.email = "doanthon111g";
    user.password = "123456111";
    loginService.login(user).then((httpStatus) => {
         expect(httpStatus.code).toBe(HttpStatus.UNAUTHORISED);
     })
     .catch((error)=>{
        expect(error).toBe(Error);
    })
   
});

it("test the login function invalid",  () => {
    let user = new User();
    let loginService = new LoginService();
    user.email = "doanthong";
    loginService.login(user).then((httpStatus) => {
        expect(httpStatus.code).toBe(HttpStatus.UNAUTHORISED);
    })
    .catch((error)=>{
        expect(error).toBe(Error);
    })
});

it("test the login function invalid",  () => {
    let user = new User();
    let loginService = new LoginService();
    user.password = "123456";
    loginService.login(user).then((httpStatus) => {
        expect(httpStatus.code).toBe(HttpStatus.UNAUTHORISED);
    })
    .catch((error)=>{
        expect(error).toBe(Error);
    })

});

it("test the login function invalid",  () => {
    let user = new User();
    let loginService = new LoginService();
   loginService.login(user).then((httpStatus) => {
        expect(httpStatus.code).toBe(HttpStatus.UNAUTHORISED);
    })
    .catch((error)=>{
        expect(error).toBe(Error);
    })
});

