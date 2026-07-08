import { Module } from "../kernel/Module";
import { ServiceContainer } from "../kernel/ServiceContainer";

export class PortfolioModule implements Module {
    readonly name = "Portfolio";

    register(container: ServiceContainer): void {
        console.log("Register Portfolio Module");
    }

    boot(): void {
        console.log("Portfolio Module Boot");
    }

    shutdown(): void {
        console.log("Portfolio Module Shutdown");
    }
}
