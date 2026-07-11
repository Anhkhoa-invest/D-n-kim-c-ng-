"use client";
import { useDashboardRealtime } from "../app/hooks/useDashboardRealtime";
import AINewsWidgetService from "../app/services/AINewsWidgetService";
import AINewsCard from "./AINewsCard";
import DashboardExplainCard from "./DashboardExplainCard";
import DashboardReportCard from "./DashboardReportCard";
import RealtimeDashboard from "./RealtimeDashboard";

import { RealtimeEngine } from "../app/services/RealtimeEngine";
import AIAnalysisCard from "./AIAnalysisCard";
import { InvestmentDecisionEngine } from "../app/ai/engines/InvestmentDecisionEngine";
import NotificationCard from "./NotificationCard";
import { useMarket } from "../app/hooks/useMarket";
import MarketService from "../app/services/MarketService";
import WatchlistCard from "./WatchlistCard";
import { PortfolioService } from "../app/services/PortfolioService";
import { useState, useEffect } from "react";
import { portfolio } from "../data/market";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SummaryCard from "./SummaryCard";
import MarketCard from "./MarketCard";
import PortfolioCard from "./PortfolioCard";
import Top5Card from "./Top5Card";
import StockList from "./StockList";
import AddStockButton from "./AddStockButton";
import AddStockForm from "./AddStockForm";
import AIAssistant from "./AIAssistant";
import { aiRegistry } from "../app/ai/AIBootstrap";
import { useRealtimeMarket } from "../app/hooks/useRealtimeMarket";
import DashboardHistoryCard from "./DashboardHistoryCard";



export default function Dashboard() {
  const [stocks, setStocks] = useState(portfolio);
  const quotes = useRealtimeMarket();
console.log("Realtime Quotes:", quotes);


  const [search, setSearch] = useState("");
  const [analysis, setAnalysis] = useState<any>(null);
  const [news, setNews] = useState<any[]>([]);
useEffect(() => {
    const loadNews = async () => {
        const data = await AINewsWidgetService.loadWidget();
        setNews(data);
    };

    loadNews();
}, []);


  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useMarket("HHV");

  // Load Portfolio
  useEffect(() => {
    setStocks(PortfolioService.loadPortfolio(portfolio));
  }, []);

  // AI Analysis
  useEffect(() => {
    const loadAnalysis = async () => {
      const engine = new InvestmentDecisionEngine();

      const result = await engine.analyze({
        symbol: "MBB",
        fundamental: 90,
        technical: 88,
        risk: 20,
        sentiment: 85,
      });

      setAnalysis(result);
    };

    loadAnalysis();
  }, []);

  // Refresh Market
  useEffect(() => {
    const refresh = async () => {
      const open = await MarketService.isMarketOpen();

      if (!open) return;

      // Sprint sau sẽ cập nhật dữ liệu thật
    };

    refresh();

    const timer = setInterval(refresh, 30000);

    return () => clearInterval(timer);
  }, []);

  // Realtime
  useEffect(() => {
    const symbols = ["VNINDEX", "MBB", "HHV"];
RealtimeEngine.start((prices: unknown[]) => {
    console.log("Realtime Engine:", prices);
});

   

    return () => {
      RealtimeEngine.stop();
    };
  }, []);

  // Save Portfolio
  useEffect(() => {
    PortfolioService.savePortfolio(stocks);
  }, [stocks]);


useEffect(() => {
    const refresh = async () => {
        const open = await MarketService.isMarketOpen();

        if (!open) return;

        // Sprint sau sẽ cập nhật dữ liệu thật tại đây
    };

    refresh();

    const timer = setInterval(refresh, 30000);

    return () => clearInterval(timer);
}, []);


useEffect(() => {
  const symbols = ["VNINDEX", "MBB", "HHV"];

 RealtimeEngine.start((prices: unknown[]) => {
    console.log("Realtime Engine:", prices);
});


  return () => {
    RealtimeEngine.stop();
  };
}, []);

  
  useEffect(() => {
  PortfolioService.savePortfolio(stocks);
}, [stocks]);


  return (
    <main
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
        padding: 30,
        fontFamily: "Arial",
      }}
    >
      <Header />

      <div
        style={{
          display: "flex",
          gap: 20,
          alignItems: "flex-start",
        }}
      >
        <Sidebar />

        <div style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="🔍 Tìm mã cổ phiếu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 10,
              border: "1px solid #ddd",
              marginBottom: 20,
            }}
          />

          <SummaryCard />
          <div style={{ marginTop: 20 }}>
    <h2>📰 AI News</h2>

    {news.map((item, index) => (
        <AINewsCard
            key={index}
            news={item}
        />
    ))}
</div>



          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              marginTop: 20,
            }}
          >
            <MarketCard />
            <PortfolioCard stocks={stocks} />
            <Top5Card />
            <WatchlistCard />
<NotificationCard />
<AIAnalysisCard
    score={94}
    recommendation="BUY"
    confidence={95}
    comment="Ngân hàng chất lượng cao, ROE tốt, định giá hợp lý."
/>
<DashboardExplainCard />
<DashboardReportCard />
<DashboardHistoryCard />

<RealtimeDashboard stocks={stocks} />


          </div>
          <AIAssistant />
          <AddStockButton
            onClick={() => {
              setEditingIndex(null);
              setShowForm(true);
            }}
          />
          {showForm && (
            <AddStockForm
              editingStock={
                editingIndex !== null ? stocks[editingIndex] : null
              }
              onAdd={(newStock: any) => {
                if (editingIndex !== null) {
                  const updated = [...stocks];
                  updated[editingIndex] = newStock;
                  setStocks(updated);
                  setEditingIndex(null);
                } else {
                  setStocks([...stocks, newStock]);
                }
                setShowForm(false);
              }}
            />
          )}
          <StockList
            stocks={stocks.filter((stock: any) =>
              stock.code.toLowerCase().includes(search.toLowerCase())
            )}
            onDelete={(index: number) => {
              setStocks(stocks.filter((_: any, i: number) => i !== index));
            }}
            onEdit={(index: number) => {
              setEditingIndex(index);
              setShowForm(true);
            }}
          />
        </div>
      </div>
    </main>
  );
}

