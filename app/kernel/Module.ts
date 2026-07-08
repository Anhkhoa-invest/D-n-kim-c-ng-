import { ServiceContainer } from "./ServiceContainer";

export interface Module {
    readonly name: string;

    register(container: ServiceContainer): void;

    boot?(): void;

    shutdown?(): void;
}

