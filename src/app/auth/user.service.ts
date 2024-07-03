import { User } from "./user.model";

// dodaj u providers u koreni modul!
export class UserService {
    private users : User [] =  [
        {
            id: "0",
            username: "anchy",
            password:"123",
            email: "anchy@gmail.com",
            cardNumber: 123
        },
        {
            id: "1",
            username: "ana",
            password:"123",
            email: "ana@gmail.com",
            cardNumber: 456
        }
    ]

    getUsers(){
        return this.users;
    }
    userExists(email: string, password: string): boolean {
        return this.users.some(user => user.email === email && user.password === password);
      }
}

