export interface Alert {
  id: string;

  symbol: string;

  type: string;

  title: string;

  message: string;

  targetValue?: number;

  currentValue?: number;

  isRead: boolean;

  createdAt: Date;

  enabled: boolean;

}
