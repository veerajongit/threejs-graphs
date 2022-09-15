import { DefaultEnvironment } from "./default.env";
import DevEnvironment from "./dev.env";
import ProdEnvironment from "./prod.env";

export function Environment(): DefaultEnvironment {
    if (import.meta.env.DEV) {
        return new DevEnvironment();
    }

    if (import.meta.env.PROD) {
        return new ProdEnvironment();
    }

    return new DefaultEnvironment;
}