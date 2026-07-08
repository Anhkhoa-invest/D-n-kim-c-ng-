import NotificationRepository from "./NotificationRepository";

export default class NotificationCenter {
  static list() {
    return NotificationRepository.all();
  }
}
