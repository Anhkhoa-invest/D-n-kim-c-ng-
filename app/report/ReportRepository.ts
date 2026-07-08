import type { Report } from "./Report";

export default class ReportRepository {

  private static reports: Report[] = [];

  static getAll() {
    return this.reports;
  }

  static add(report: Report) {
    this.reports.push(report);
  }

  static remove(id: string) {
    this.reports = this.reports.filter(
      r => r.id !== id
    );
  }

  static find(id: string) {
    return this.reports.find(
      r => r.id === id
    );
  }

}
