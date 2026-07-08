import UserRepository from "./UserRepository";

export default class UserService {

  static currentUser() {
    return UserRepository.current();
  }

}

