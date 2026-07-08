const FIREANT_API = "https://restv2.fireant.vn";

class FireAntApi {

    async getQuote(symbol: string) {

        const res = await fetch(
            `${FIREANT_API}/symbols/${symbol.toUpperCase()}`
        );

        if (!res.ok) {
            throw new Error("Không lấy được dữ liệu");
        }

        return res.json();
    }

}

export default new FireAntApi();

