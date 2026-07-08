import { Role } from "./Role";
import { Permission } from "./Permission";

export default class SecurityService {

    static hasPermission(
        role: Role,
        permission: Permission
    ) {

        switch (role) {

            case Role.ADMIN:
                return true;

            case Role.PRO:
                return permission !== Permission.ADMIN;

            case Role.USER:
                return [
                    Permission.VIEW_MARKET,
                    Permission.VIEW_PORTFOLIO,
                ].includes(permission);

            default:
                return false;
        }

    }

}

