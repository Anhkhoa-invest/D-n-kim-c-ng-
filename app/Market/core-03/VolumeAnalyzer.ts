export default class VolumeAnalyzer {
  public analyze(current: number, average: number) {
    return {
      current,
      average,
      ratio: average === 0 ? 0 : current / average,
      highVolume: current > average,
    };
  }
}
