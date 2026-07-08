import SessionManager from "./SessionManager";

export default class AuthService {

  static login(token: string) {
    SessionManager.save(token);
  }

  static logout() {
    SessionManager.clear();
  }

  static isAuthenticated() {
    return SessionManager.isLoggedIn();
  }

  static token() {
    return SessionManager.get();
  }
}

