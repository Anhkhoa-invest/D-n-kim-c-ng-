"use client";
import MarketDataService from "../app/services/MarketDataService";

import AIEngine from "../app/services/AIEngine";
import StockRepository from "../app/services/StockRepository";


interface Props {
    symbol: string;
    price: number;
    roe: number;
    growth: number;
    pe: number;
    debt: number;
}

export default function AIAnalysisCard({
    symbol,
    price,
    roe,
    growth,
    pe,
    debt,
}: Props) {

const stock = StockRepository.get(symbol);


const result = AIEngine.analyze(stock);




  return (
    <div className="rounded-xl border p-5 bg-slate-900 text-white">
      <h2 className="text-xl font-bold mb-3">
        🤖 AI Phân tích doanh nghiệp
      </h2>

      <div className="space-y-2">

        <p>Điểm AI: <b>{result.score} / 100</b></p>


        <p>
          Khuyến nghị:
          <span className="text-green-400 ml-2">
            {result.recommendation.action}
          </span>
        </p>

        <p>
          Độ tin cậy:
          <b> {result.recommendation.confidence}%</b>
        </p>

        <hr />

        <p>{result.explanation}</p>

      </div>

    </div>
  );
}
