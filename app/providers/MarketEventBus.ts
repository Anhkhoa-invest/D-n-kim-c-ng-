type Listener = () => void;

class MarketEventBus {
  private listeners: Listener[] = [];

  subscribe(listener: Listener) {
    this.listeners.push(listener);

    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

clear() {
    this.listeners = [];
}

count() {
    return this.listeners.length;
}

hasListeners() {
    return this.listeners.length > 0;
}
  emit() {
    this.listeners.forEach(listener => listener());
  }
}

export default new MarketEventBus();

