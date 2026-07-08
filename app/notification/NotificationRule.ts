export default class NotificationRule {
  static priceIncrease(change: number) {
    return change >= 5;
  }

  static priceDecrease(change: number) {
    return change <= -5;
  }
}
