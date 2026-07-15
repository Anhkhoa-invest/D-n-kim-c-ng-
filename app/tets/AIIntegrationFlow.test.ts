
import AIIntegrationService from "../services/AIIntegrationService";

async function run() {
  console.log("=================================");
  console.log("KIM CƯƠNG OS");
  console.log("AI Integration Flow Test");
  console.log("=================================");

  const result = await AIIntegrationService.analyze("MBB");

  console.log(result);

  console.log("=================================");
  console.log("TEST PASS");
  console.log("=================================");
}

run();
