
import AIAgentDispatcher from "./AIAgentDispatcher";

export default class AIAgentRouter {
  static route(message: any) {
    AIAgentDispatcher.dispatch(message);
  }

  static receive() {
    return AIAgentDispatcher.next();
  }
}


