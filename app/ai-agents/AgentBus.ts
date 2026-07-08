import { AgentMessage } from "./AgentMessage";

export class AgentBus {
  private readonly messages: AgentMessage[] = [];

  send(message: AgentMessage) {
    this.messages.push(message);
  }

  receive(agent: string) {
    return this.messages.filter(m => m.to === agent);
  }

  history() {
    return [...this.messages];
  }

  clear() {
    this.messages.length = 0;
  }
}
