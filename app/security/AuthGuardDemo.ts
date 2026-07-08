import AuthGuard from "./AuthGuard";
import AuthService from "./AuthService";

AuthService.login("demo-token");

console.log(AuthGuard.canAccess());

AuthGuard.requireLogin();

AuthService.logout();
