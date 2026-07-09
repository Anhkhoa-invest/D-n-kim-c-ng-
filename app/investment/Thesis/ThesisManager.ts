import ThesisService from "./ThesisService";

export default class ThesisManager {

    static active() {

        return ThesisService
            .getAll()
            .filter(
                thesis => thesis.status === "ACTIVE"
            );

    }

    static completed() {

        return ThesisService
            .getAll()
            .filter(
                thesis => thesis.status === "COMPLETED"
            );

    }

    static invalid() {

        return ThesisService
            .getAll()
            .filter(
                thesis => thesis.status === "INVALID"
            );

    }

}
