import { Module } from "../kernel/Module";
import { ServiceContainer } from "../kernel/ServiceContainer";
import { ProviderLoader } from "./ProviderLoader";

export class MarketModule implements Module {
    readonly name = "Market";

    register(container: ServiceContainer): void {
        console.log("Register Market Module");
    }

    boot(): void {
        console.log("Market Module Boot");
    }

    shutdown(): void {
        console.log("Market Module Shutdown");
    }
}

