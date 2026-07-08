import type { Report } from "./Report";
import ReportRepository from "./ReportRepository";

export default class ReportService {

  static getAll() {
    return ReportRepository.getAll();
  }

  static add(report: Report) {
    ReportRepository.add(report);
  }

  static remove(id: string) {
    ReportRepository.remove(id);
  }

  static find(id: string) {
    return ReportRepository.find(id);
  }

}

