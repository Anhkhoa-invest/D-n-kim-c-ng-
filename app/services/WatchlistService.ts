export default class WatchlistService {

  private static symbols = [
    "HHV",
    "MBB",
    "FPT",
    "VCB",
  ];

  static getAll() {
    return this.symbols;
  }

  static add(symbol: string) {
    if (!this.symbols.includes(symbol)) {
      this.symbols.push(symbol);
    }
  }

  static remove(symbol: string) {
    this.symbols =
      this.symbols.filter(s => s !== symbol);
  }

}

