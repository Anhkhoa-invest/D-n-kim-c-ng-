import AIWorkflowEngine from "./AIWorkflowEngine";
import AIAgentBootstrap from "./AIAgentBootstrap";

export default class AIWorkflowManager {

   
static async start() {

    AIAgentBootstrap.boot();

    return AIWorkflowEngine.run();

}


    static async health() {
        return AIWorkflowEngine.health();
    }

    static async restart() {
        return this.start();
    }
}

