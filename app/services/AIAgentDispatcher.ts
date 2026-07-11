import AIAgentBus from "./AIAgentBus";

export default class AIAgentDispatcher {
  static dispatch(message: any) {
    AIAgentBus.send(message);
  }

  static next() {
    return AIAgentBus.receive();
  }

  static pending() {
    return AIAgentBus.pending();
  }
}


