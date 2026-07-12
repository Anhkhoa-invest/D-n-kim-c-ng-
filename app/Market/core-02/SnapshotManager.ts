import type { MarketData } from "@/app/models/MarketData";

export default class SnapshotManager {
    private snapshots: MarketData[] = [];

    public add(snapshot: MarketData): void {
        this.snapshots.push(snapshot);
    }

    public latest(): MarketData | undefined {
        return this.snapshots.at(-1);
    }

    public all(): MarketData[] {
        return [...this.snapshots];
    }

    public clear(): void {
        this.snapshots = [];
    }

    public count(): number {
        return this.snapshots.length;
    }
}
