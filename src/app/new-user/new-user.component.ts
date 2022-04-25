import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {User} from "../models/User.model";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  // @ts-ignore
  userfrom: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {//initialiser le formulaire
    this.initForm();
  }

  initForm(){ //retourn un formulair
    this.userfrom = this.formBuilder.group({
      firstname: ['inconnu', Validators.required],
      lastname: ['inconnu', Validators.required],
      email: ['inconnu', [Validators.required, Validators.email]],
      drinkPreference: ['inconnu', Validators.required],
      hobbies: this.formBuilder.array([])
      }
    );
  }


  onSubmitForm() {
    //recuperer les données du formulair
    const formvalue =this.userfrom.value;
    //creer un user avec
    const newUser = new User(
      formvalue['firstname'],
      formvalue['lastname'],
      formvalue['email'],
      formvalue['drinkPreference'],
      formvalue['hobbies']? formvalue['hobbies']:[]
    );
    // ajouter un user dans la liste des users
    this.userService.addUser(newUser);
    // redirecte à  user
    this.router.navigate(['../user']);

  }

  getHobbies(){
    return this.userfrom.get('hobbies') as FormArray;
  }

  onAddHobbies(){
    const newHobbyControl = this.formBuilder.control('', Validators.required);
    this.getHobbies().push(newHobbyControl);
  }
}
