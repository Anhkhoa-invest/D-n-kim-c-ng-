export default class PortfolioExport {

    static toJSON(data: any): string {

        return JSON.stringify(data, null, 2);

    }

}
