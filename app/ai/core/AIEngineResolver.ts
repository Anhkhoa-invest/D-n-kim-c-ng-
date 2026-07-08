import { AIServiceLocator } from "./AIServiceLocator";
import { IAIEngine } from "../contracts/IAIEngine";

export class AIEngineResolver {
  static getAll(): IAIEngine[] {
    return AIServiceLocator.getKernel().manager.getAll();
  }

  static getPrimary(): IAIEngine | null {
    return AIServiceLocator.getKernel().getPrimaryEngine();
  }
}
