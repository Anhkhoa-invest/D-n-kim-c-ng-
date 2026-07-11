import AIMemoryService from "./AIMemoryService";

export default class AIFeedbackService {

    static updateStatus(
        id: string,
        status: "WIN" | "LOSS"
    ) {

        const history = AIMemoryService.getAll();

        const item = history.find(x => x.id === id);

        if (!item) return;

        item.status = status;

    }

}
