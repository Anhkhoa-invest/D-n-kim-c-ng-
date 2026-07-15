import RealtimeScheduler from "../services/RealtimeScheduler";

const symbols = [
  "MBB",
  "VCB",
  "FPT",
  "ACB",
  "HHV",
  "CTG",
  "BID",
  "SSI",
  "HPG",
  "VNM",
];

console.log("=== REALTIME STRESS TEST ===");

RealtimeScheduler.start(symbols, 3000);

console.log("Stress Test Started...");

