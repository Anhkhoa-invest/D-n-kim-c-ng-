export interface ApplicationContext {
  userId?: string;
  portfolioId?: string;
  market: "VN";
  version: string;
}

export const DefaultApplicationContext: ApplicationContext = {
  market: "VN",
  version: "10.0.0",
};

