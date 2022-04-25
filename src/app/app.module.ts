import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import {AppareilService} from "./services/appareil.service";
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthService} from "./services/auth.service";
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import {AuthGard} from "./services/auth-gard.service";
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from "./services/user.service";
import { NewUserComponent } from './new-user/new-user.component';
import {HttpClientModule} from "@angular/common/http"; //importer le module httpclient

const appRoutes: Routes = [

  {path: 'user', canActivate: [AuthGard], component: UserListComponent},
  {path: 'newuser',  component: NewUserComponent},
  {path: 'edit', canActivate: [AuthGard], component: EditAppareilComponent},
  {path: 'appareil', canActivate: [AuthGard], component: AppareilViewComponent}, // appareilview
  {path: 'appareil/:id', canActivate: [AuthGard],  component: SingleAppareilComponent},
  {path: 'auth', component: AuthComponent}, // l'authentification
  {path: '', component: AppareilViewComponent}, // le home
  {path: 'not-found', component:FourOFourComponent},
  {path: '**', redirectTo:'/not-found'}//doit etre mis en fin
];
@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, //formulaire reactives
    RouterModule.forRoot(appRoutes), // toute nos routes se toruvent dans appRoutes
    HttpClientModule//importer httpclient module
  ],
  providers: [ //injection de service
    AppareilService, //injection dans app.module
    AuthService,
    AuthGard, // injection du service Authgard
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
