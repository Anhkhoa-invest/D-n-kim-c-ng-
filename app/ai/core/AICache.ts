export interface AICache {
  key: string;
  value: unknown;
  expiresAt?: Date;
}
