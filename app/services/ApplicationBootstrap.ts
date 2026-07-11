import ApplicationLifecycle from "./ApplicationLifecycle";
import { DefaultApplicationContext } from "./ApplicationContext";

export default class ApplicationBootstrap {
  static boot() {
    ApplicationLifecycle.start();

    console.log("💎 Booting Kim Cương OS");
    console.log(DefaultApplicationContext);

    return true;
  }
}

