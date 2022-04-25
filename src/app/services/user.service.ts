import {User} from "../models/User.model";
import {Subject} from "rxjs";

export class UserService{
  private users: User[]=[
    {
      firstname: "Jean",
      lastname: "Bernard",
      email:"jean12@gmail.com",
      drinkPreference: "Coca",
      hobies: ['coder', 'café']}
    ];
  userSubject = new Subject<User[]>();
  emitUsers(){
    // @ts-ignore
    this.userSubject.next(this.users.slice());
  }
  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }
}
