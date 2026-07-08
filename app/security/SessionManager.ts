const SESSION_KEY = "kimcuong_session";

export default class SessionManager {
  static save(token: string) {
    localStorage.setItem(SESSION_KEY, token);
  }

  static get() {
    return localStorage.getItem(SESSION_KEY);
  }

  static clear() {
    localStorage.removeItem(SESSION_KEY);
  }

  static isLoggedIn() {
    return !!this.get();
  }
}

