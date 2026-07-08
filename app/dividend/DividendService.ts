import type { Dividend } from "./Dividend";
import DividendRepository from "./DividendRepository";

export default class DividendService {

  static getAll() {
    return DividendRepository.getAll();
  }

  static add(dividend: Dividend) {
    DividendRepository.add(dividend);
  }

  static remove(id: string) {
    DividendRepository.remove(id);
  }

  static find(id: string) {
    return DividendRepository.find(id);
  }

}

