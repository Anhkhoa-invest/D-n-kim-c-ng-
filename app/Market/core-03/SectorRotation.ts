export default class SectorRotation {
  public analyze(
    fromSector: string,
    toSector: string,
    amount: number
  ) {
    return {
      fromSector,
      toSector,
      amount,
      rotating: amount > 0,
    };
  }
}
