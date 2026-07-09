import type { Position } from "./Position";
import PositionRepository from "./PositionRepository";

export default class PositionService {

    static getAll() {
        return PositionRepository.getAll();
    }

    static add(item: Position) {
        PositionRepository.add(item);
    }

    static remove(id: string) {
        PositionRepository.remove(id);
    }

    static find(id: string) {
        return PositionRepository.find(id);
    }

    static update(position: Position) {
        PositionRepository.update(position);
    }

}

