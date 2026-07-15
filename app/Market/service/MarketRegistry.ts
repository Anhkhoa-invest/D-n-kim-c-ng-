/**
 * Kim Cuong OS
 * Market Service
 * Market Registry
 */

export class MarketRegistry {
  private readonly services = new Map<string, unknown>();

  register<T>(name: string, service: T): void {
    this.services.set(name, service);
  }

  resolve<T>(name: string): T | null {
    return (this.services.get(name) as T) ?? null;
  }

  has(name: string): boolean {
    return this.services.has(name);
  }

  unregister(name: string): void {
    this.services.delete(name);
  }

  clear(): void {
    this.services.clear();
  }

  getNames(): string[] {
    return [...this.services.keys()];
  }
}
