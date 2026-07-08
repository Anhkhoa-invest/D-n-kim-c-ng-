import { IMarketDataProvider } from "./IMarketDataProvider";
import { ProviderRegistry } from "./ProviderRegistry";

export class SourceManager {
  
  private activeProvider: string | null = null;

 register(name: string, provider: IMarketDataProvider) {
    ProviderRegistry.register(name, provider);

    if (!this.activeProvider) {
        this.activeProvider = name;
    }
}

  getProvider(): IMarketDataProvider {
    if (!this.activeProvider) {
      throw new Error("No market provider registered.");
    }

    const provider = ProviderRegistry.get(this.activeProvider!);


    if (!provider) {
      throw new Error("Active provider not found.");
    }

    return provider;
  }

  switchProvider(name: string) {
    if (!ProviderRegistry.has(name)) {
      throw new Error(`Provider '${name}' not found.`);

    }

    this.activeProvider = name;
  }

  listProviders(): string[] {
    return ProviderRegistry.getNames();

  }

  getActiveProvider(): string | null {
    return this.activeProvider;
  }
}
