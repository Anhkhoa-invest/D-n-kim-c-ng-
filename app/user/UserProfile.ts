import UserService from "./UserService";

export default class UserProfile {

  static profile() {
    return UserService.currentUser();
  }

}
