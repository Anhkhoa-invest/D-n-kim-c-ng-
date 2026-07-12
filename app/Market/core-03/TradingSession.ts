export enum SessionType {
  PRE_OPEN = "PRE_OPEN",
  MORNING = "MORNING",
  LUNCH = "LUNCH",
  AFTERNOON = "AFTERNOON",
  CLOSED = "CLOSED"
}

export default class TradingSession {
  constructor(
    public session: SessionType = SessionType.CLOSED,
    public updatedAt: Date = new Date()
  ) {}

  public set(session: SessionType): void {
    this.session = session;
    this.updatedAt = new Date();
  }

  public isOpen(): boolean {
    return (
      this.session === SessionType.MORNING ||
      this.session === SessionType.AFTERNOON
    );
  }
}

