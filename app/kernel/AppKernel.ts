import { Module } from "./Module";
import { MarketModule } from "../services/MarketModule";
import { PortfolioModule } from "../services/PortfolioModule";
import { AIModule } from "../services/AIModule";
import { NotificationModule } from "../services/NotificationModule";
import { SecurityModule } from "../services/SecurityModule";



import { ServiceContainer } from "./ServiceContainer";
import { ModuleRegistry } from "./ModuleRegistry";
import { EventBus } from "./events";
import { Logger } from "./Logger";
import { HealthMonitor } from "./HealthMonitor";




export class AppKernel {
  private readonly container = new ServiceContainer();
private readonly modules = new ModuleRegistry();

private readonly events = new EventBus();

private readonly logger = new Logger();

private readonly health = new HealthMonitor();
boot(): void {
    this.logger.info("🚀 Kim Cuong OS Kernel booting...");

    this.health.setHealthy("Kernel");
    const market = new MarketModule();

market.register(this.container);

this.modules.register(market);

market.boot();

this.logger.info("📈 Market Module started.");
const portfolio = new PortfolioModule();

portfolio.register(this.container);

this.modules.register(portfolio);

portfolio.boot();

this.logger.info("💼 Portfolio Module started.");
const ai = new AIModule();

ai.register(this.container);

this.modules.register(ai);

ai.boot();

this.logger.info("🤖 AI Module started.");
const notification = new NotificationModule();

notification.register(this.container);

this.modules.register(notification);

notification.boot();

this.logger.info("🔔 Notification Module started.");
const security = new SecurityModule();

security.register(this.container);

this.modules.register(security);

security.boot();

this.logger.info("🔒 Security Module started.");



    this.logger.info("✅ Kernel is healthy.");
}
  

  containerInstance(): ServiceContainer {
    return this.container;
  }

  shutdown(): void {
    this.health.setUnhealthy("Kernel");

    this.logger.warn("🔴 Kim Cuong OS Kernel stopped.");
}
}

