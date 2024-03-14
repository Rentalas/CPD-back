import { AccessTokens } from "./user.abstraction";
import { Role } from "./user.constant";

export class User {
    //number?
    id: string;
    firstName: string;
    lastName: string;
    birthDate: number;
    lastTimeActive: number;
    tokens: AccessTokens;
    role: Role;

}