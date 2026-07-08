import AlertService from "./AlertService";
import { Alert } from "./Alert";

export default class AlertEngine {

    static run(): Alert[] {

        const alerts = AlertService.getAll();

        return alerts.filter(alert => {

            if (!alert.enabled) return false;

            switch (alert.type) {

                case "PRICE_ABOVE":
                    return (alert.currentValue ?? 0) >= (alert.targetValue ?? 0);


                case "PRICE_BELOW":
                    return (alert.currentValue ?? 0) <= (alert.targetValue ?? 0);


                default:
                    return false;
            }

        });

    }

}

