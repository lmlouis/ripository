import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import {AppareilService} from "./services/appareil.service";
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {Route, RouterModule} from "@angular/router";
//type de route
type route =[Route];
// @ts-ignore
const appRoutes: route = [
  {path: 'appareil', component: AppareilViewComponent}, // appareilview
  {path: 'auth', component: AuthComponent}, // l'authentification
  {path: '', component: AppareilViewComponent} // le home
];
@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // toute nos routes se toruvent dans appRoutes
  ],
  providers: [
    AppareilService //injection dans app.module
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
