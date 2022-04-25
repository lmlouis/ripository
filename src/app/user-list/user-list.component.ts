import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {UserService} from "../services/user.service";
import {User} from "../models/User.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  // @ts-ignore
  users: User[] ;
  // @ts-ignore
  userSubscrition: Subscription;

  constructor(private userService : UserService) { }

  ngOnInit(): void {

    this.userSubscrition = this.userService.userSubject.subscribe(
      (users: User[])=>{
        this.users=users;
      }
    );
    this.userService.emitUsers();
  }
  ngOnDestroy() {
    this.userSubscrition.unsubscribe();
  }

}
