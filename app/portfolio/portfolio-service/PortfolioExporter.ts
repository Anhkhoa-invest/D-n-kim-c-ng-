import type { PortfolioItem } from "@/app/models/PortfolioItem";

export default class PortfolioExporter {

  /**
   * Export Portfolio sang JSON
   */
  public exportToJson(data: PortfolioItem[]): string {

    return JSON.stringify(data, null, 2);

  }

  /**
   * Export Object
   */
  public export(data: PortfolioItem[]): PortfolioItem[] {

    return [...data];

  }

  /**
   * Download JSON
   */
  public download(
    filename: string,
    data: PortfolioItem[]
  ): void {

    const json = this.exportToJson(data);

    const blob = new Blob([json], {
      type: "application/json"
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = filename;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

  }

  /**
   * Pretty JSON
   */
  public pretty(data: PortfolioItem[]): string {

    return JSON.stringify(data, null, 4);

  }

}

