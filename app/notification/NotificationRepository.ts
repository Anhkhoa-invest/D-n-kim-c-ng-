import NotificationService from "./NotificationService";

export default class NotificationRepository {
  static all() {
    return NotificationService.getAll();
  }
}