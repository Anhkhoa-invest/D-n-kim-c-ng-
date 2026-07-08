import { Module } from "../kernel/Module";
import { ServiceContainer } from "../kernel/ServiceContainer";

export class NotificationModule implements Module {
    readonly name = "Notification";

    register(container: ServiceContainer): void {
        console.log("Register Notification Module");
    }

    boot(): void {
        console.log("Notification Module Boot");
    }

    shutdown(): void {
        console.log("Notification Module Shutdown");
    }
}

