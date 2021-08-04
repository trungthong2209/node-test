import LoginService from "../Services/LoginService";
import User from "../Model/User";
import Pagination from "../Base/Pagination"
import HttpStatus from "../Base/HttpStatus"

it("test the login function valid", async () => {
         let user = new User();
         let loginService = new LoginService();
         user.email = "doanthong";
         user.password = "123456";
       loginService.login(user).then((httpStatus) => {
            expect(httpStatus.code).toEqual(200);
         });
    
});

it("test the login function invalid", async () => {
    let user = new User();
    let loginService = new LoginService();
    user.email = "doanthon111g";
    user.password = "123456111";
    loginService.login(user).then((httpStatus) => {
         expect(httpStatus.code).toEqual(401);
     });
   
});

it("test the login function invalid", async () => {
    let user = new User();
    let loginService = new LoginService();
    user.email = "doanthong";
    loginService.login(user).then((httpStatus) => {
        expect(httpStatus.code).toEqual(401);
    });
});

it("test the login function invalid", async () => {
    let user = new User();
    let loginService = new LoginService();
    user.password = "123456";
    loginService.login(user).then((httpStatus) => {
        expect(httpStatus.code).toEqual(401);
    });

});

it("test the login function invalid", async () => {
    let user = new User();
    let loginService = new LoginService();
   loginService.login(user).then((httpStatus) => {
        expect(httpStatus.code).toEqual(401);
    });
});

