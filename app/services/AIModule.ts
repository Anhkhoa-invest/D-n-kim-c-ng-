import { Module } from "../kernel/Module";
import { ServiceContainer } from "../kernel/ServiceContainer";

export class AIModule implements Module {
    readonly name = "AI";

    register(container: ServiceContainer): void {
        console.log("Register AI Module");
    }

    boot(): void {
        console.log("AI Module Boot");
    }

    shutdown(): void {
        console.log("AI Module Shutdown");
    }
}
