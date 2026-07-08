import type { Alert } from "./Alert";
import AlertRepository from "./AlertRepository";

export default class AlertService {

  static getAll() {
    return AlertRepository.getAll();
  }

  static add(alert: Alert) {
    AlertRepository.add(alert);
  }

  static remove(id: string) {
    AlertRepository.remove(id);
  }

  static find(id: string) {
    return AlertRepository.find(id);
  }

}
