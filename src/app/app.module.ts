import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
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


const appRoutes: Routes = [
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
    FourOFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // toute nos routes se toruvent dans appRoutes
  ],
  providers: [ //injection de service
    AppareilService, //injection dans app.module
    AuthService,
    AuthGard // injection du service Authgard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
