import NotificationService from "./NotificationService";
import { Notification } from "./Notification";

export default class NotificationManager {
  static notify(item: Notification) {
    NotificationService.push(item);
  }
}
