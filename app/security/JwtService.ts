export default class JwtService {
    static encode(userId: string) {
        return btoa(`${userId}:${Date.now()}`);
    }

    static decode(token: string) {
        try {
            return atob(token);
        } catch {
            return null;
        }
    }

    static isValid(token: string) {
        return this.decode(token) !== null;
    }
}

