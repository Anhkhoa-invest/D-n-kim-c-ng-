import { User } from "./User";

export default class UserRepository {
  static current(): User {
    return {
      id: "1",
      name: "Anh Khoa",
      email: "demo@kimcuong.vn",
      role: "admin",
    };
  }
}
