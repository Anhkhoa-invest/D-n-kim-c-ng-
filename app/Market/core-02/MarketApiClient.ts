export default class MarketApiClient {
    constructor(
        private readonly baseUrl: string
    ) {}

    async get<T>(path: string): Promise<T> {
        const response = await fetch(`${this.baseUrl}${path}`);

        if (!response.ok) {
            throw new Error(
                `Market API Error: ${response.status}`
            );
        }

        return await response.json();
    }
}

