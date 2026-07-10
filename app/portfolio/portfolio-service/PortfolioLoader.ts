import PortfolioStorage from "./PortfolioStorage";

export default class PortfolioLoader {

  private storage: PortfolioStorage;

  constructor() {
    this.storage = new PortfolioStorage();
  }

  /**
   * Load Portfolio
   */
  public load() {

    return this.storage.load();

  }

  /**
   * Load Portfolio nếu tồn tại
   */
  public loadIfExists() {

    if (!this.storage.exists()) {
      return [];
    }

    return this.storage.load();

  }

  /**
   * Khởi tạo Portfolio rỗng
   */
  public initialize() {

    if (!this.storage.exists()) {

      this.storage.save([]);

    }

    return this.storage.load();

  }

  /**
   * Reload Portfolio
   */
  public reload() {

    return this.storage.load();

  }

  /**
   * Làm mới dữ liệu
   */
  public refresh() {

    return this.reload();

  }

}
