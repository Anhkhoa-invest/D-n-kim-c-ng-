import { Module } from "../kernel/Module";
import { ServiceContainer } from "../kernel/ServiceContainer";

export class SecurityModule implements Module {
    readonly name = "Security";

    register(container: ServiceContainer): void {
        console.log("Register Security Module");
    }

    boot(): void {
        console.log("Security Module Boot");
    }

    shutdown(): void {
        console.log("Security Module Shutdown");
    }
}
