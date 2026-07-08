import { useState } from "react";
import { AIDecisionService } from "../app/services/AIDecisionService";
import { AIExplainService } from "../app/services/AIExplainService";
import { AIService } from "../app/services/AIService";
import { OpenAIService } from "../app/services/OpenAIService";

type Props = {
  code?: string;
};

export default function AIAssistant({ code = "MBB" }: Props) {
  const ai = AIService.analyze(code);
  const decision = AIDecisionService.decide(ai.total);
  const explanation = AIExplainService.explain(ai.total);

  const [answer, setAnswer] = useState("");

  const askAI = async () => {
    const res = await OpenAIService.ask(
      `Phân tích cổ phiếu ${code}`
    );

    setAnswer(res.answer);
  };

  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        marginTop: "20px",
      }}
    >
      <h2>🤖 AI Quản gia Kim Cương</h2>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          background: "#f5f5f5",
          borderRadius: "10px",
        }}
      >
        <b>Bạn:</b>

        <p>Điểm AI: {ai.total}</p>
        <p>Tài chính: {ai.financial}</p>
        <p>Tăng trưởng: {ai.growth}</p>
        <p>Định giá: {ai.valuation}</p>
        <p>Rủi ro: {ai.risk}</p>

        <hr />

        <p>{ai.comment}</p>

        <hr />

        <p>
          <b>Khuyến nghị:</b> {decision.recommendation}
        </p>

        <p>
          <b>Độ tin cậy:</b> {decision.confidence}%
        </p>

        <hr />

        <p>{explanation}</p>

        <button
          onClick={askAI}
          style={{
            marginTop: 20,
            padding: "10px 20px",
            borderRadius: 8,
            border: "none",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          🚀 Phân tích bằng AI
        </button>

        {answer && (
          <div
            style={{
              marginTop: 20,
              background: "#eef6ff",
              padding: 15,
              borderRadius: 10,
            }}
          >
            <b>Kim Cương AI:</b>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}
