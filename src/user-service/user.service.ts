import { User } from "../models/user";
import { Observable } from 'rxjs';
import { createHash } from 'node:crypto';
import { AccessTokens } from "../models/user.abstraction";

export interface UserDao extends Record<string, any> {

}

export class UserService {
    constructor(private dao: UserDao) {}
    getUser(login): Observable<User> {
        return this.dao.getUser({login});
    };

    //change type
    createUser(userData: Record<string, any>): Observable<User> {
        //to utility
        const hash = createHash('sha256');
        hash.update(userData.password);
        const hashPassword = hash.digest('hex');

        userData.password = hashPassword;

        return this.dao.setUser(userData);
    };
    updateUser(): Observable<User> {
        throw Error
    };
    deleteUser(): Observable<boolean> {};

    validateByPassword(): Observable<boolean> {};
    validateByToken(): Observable<boolean> {};
    refreshTokens(): Observable<AccessTokens> {};
}