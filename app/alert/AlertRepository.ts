import type { Alert } from "./Alert";

export default class AlertRepository {

  private static alerts: Alert[] = [];

  static getAll() {
    return this.alerts;
  }

  static add(alert: Alert) {
    this.alerts.push(alert);
  }

  static remove(id: string) {
    this.alerts = this.alerts.filter(
      a => a.id !== id
    );
  }

  static find(id: string) {
    return this.alerts.find(
      a => a.id === id
    );
  }

}

