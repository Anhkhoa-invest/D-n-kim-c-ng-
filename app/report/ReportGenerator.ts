import ReportService from "./ReportService";

export default class ReportGenerator {

  static generate() {

    return ReportService.getAll();

  }

}
