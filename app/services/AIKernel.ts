import AIRuntime from "./AIRuntime";

export default class AIKernel {
  static async start() {
    return AIRuntime.boot();
  }

  static async status() {
    return AIRuntime.boot();
  }
}


