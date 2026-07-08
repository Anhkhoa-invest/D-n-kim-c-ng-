import AuthService from "./AuthService";

export default class AuthGuard {
  static canAccess() {
    return AuthService.isAuthenticated();
  }

  static requireLogin() {
    if (!this.canAccess()) {
      throw new Error("User is not authenticated.");
    }
  }
}

