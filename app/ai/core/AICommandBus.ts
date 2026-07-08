import { AICommand } from "./AICommand";

type Handler = (command: AICommand) => void;

export class AICommandBus {
  private handlers: Handler[] = [];

  register(handler: Handler) {
    this.handlers.push(handler);
  }

  dispatch(command: AICommand) {
    for (const handler of this.handlers) {
      handler(command);
    }
  }
}
