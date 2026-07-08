import AuthService from "./AuthService";

AuthService.login("demo-token");

console.log(AuthService.isAuthenticated());

console.log(AuthService.token());

AuthService.logout();


