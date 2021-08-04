import LoginService from "../Services/LoginService";
import User from "../Model/User";
import Pagination from "../Base/Pagination"
import HttpStatus from "../Base/HttpStatus"

it("test the login function valid", async () => {
         let user = new User();
         let loginService = new LoginService();
         user.email = "doanthong";
         user.password = "123456";
         const response = await loginService.login(user);
         expect(response.code).toEqual(200);
}, 30000);

it("test the login function invalid", async () => {
    let user = new User();
    let loginService = new LoginService();
    user.email = "doanthon111g";
    user.password = "123456111";
    const response = await loginService.login(user);
    expect(response.code).toEqual(401);
}, 30000);

it("test the login function invalid", async () => {
    let user = new User();
    let loginService = new LoginService();
    user.email = "doanthon111g";
    const response = await loginService.login(user);
    expect(response.code).toEqual(401);
}, 30000);

it("test the login function invalid", async () => {
    let user = new User();
    let loginService = new LoginService();
    user.password = "123456111";
    const response = await loginService.login(user);
    expect(response.code).toEqual(401);
}, 30000);

it("test the login function invalid", async () => {
    let user = new User();
    let loginService = new LoginService();
    const response = await loginService.login(user);
    expect(response.code).toEqual(401);
}, 30000);

