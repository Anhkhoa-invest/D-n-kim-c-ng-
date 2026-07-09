export default interface Portfolio {
  id: string;

  name: string;

  ownerId: string;

  currency: string;

  totalValue: number;

  totalCost: number;

  cash: number;

  createdAt: Date;

  updatedAt: Date;
}


