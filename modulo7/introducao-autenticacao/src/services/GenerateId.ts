// a)Aumenta a segurança e trás mais possibiliidades de combinações.

//b)
import { v4 } from "uuid"

export class IdGenerator {
    public generateId = () => {
        return v4()
    }
}
