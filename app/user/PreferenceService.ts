export interface UserPreference {
    theme: "light" | "dark";
    language: string;
    currency: string;
}

export default class PreferenceService {
    private static preference: UserPreference = {
        theme: "dark",
        language: "vi",
        currency: "VND",
    };

    static get() {
        return this.preference;
    }

    static update(data: Partial<UserPreference>) {
        this.preference = {
            ...this.preference,
            ...data,
        };
    }
}

