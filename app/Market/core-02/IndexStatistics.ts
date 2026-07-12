export default class IndexStatistics {
  constructor(
    public totalVolume = 0,
    public advancing = 0,
    public declining = 0,
    public unchanged = 0
  ) {}

  public reset(): void {
    this.totalVolume = 0;
    this.advancing = 0;
    this.declining = 0;
    this.unchanged = 0;
  }
}

