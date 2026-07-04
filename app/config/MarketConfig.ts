const MarketConfig = {
  vietnam: {
    baseUrl: "https://api-finfo.vndirect.com.vn",
    stockEndpoint: "/v4/stock_prices",
    timeout: 10000,
  },

  cache: {
    ttl: 30000,
  },
};

export default MarketConfig;

