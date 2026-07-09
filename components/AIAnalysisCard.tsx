import AIFacade from "@/app/services/AIFacade";
type Props = {
  score: number;
  recommendation: string;
  confidence: number;
  comment: string;
};

export default function AIAnalysisCard({
  score,
  recommendation,
  confidence,
  comment,
}: Props) {
  const color =
    recommendation === "BUY"
      ? "text-green-600"
      : recommendation === "HOLD"
      ? "text-yellow-500"
      : "text-red-600";

  return (
    <div className="rounded-xl border p-4 shadow-sm bg-white">
      <h3 className="text-lg font-bold mb-3">
        🤖 AI Investment Analysis
      </h3>

      <div className="space-y-2">
        <div>
          <strong>AI Score:</strong> {score}
        </div>

        <div>
          <strong>Recommendation:</strong>{" "}
          <span className={color}>
            {recommendation}
          </span>
        </div>

        <div>
          <strong>Confidence:</strong> {confidence}%
        </div>

        <div>
          <strong>Explanation:</strong>
          <p className="mt-1 text-gray-600">
            {comment}
          </p>
        </div>
      </div>
    </div>
  );
}
