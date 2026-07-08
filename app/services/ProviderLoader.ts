import { ProviderRegistry } from "./ProviderRegistry";
import MockMarketProvider from "./MockMarketProvider";
import FireAntProvider from "./FireAntProvider";

export class ProviderLoader {
    static load() {
        ProviderRegistry.register(
            "mock",
            new MockMarketProvider()
        );

        ProviderRegistry.register(
            "fireant",
            new FireAntProvider()
        );
    }
}

