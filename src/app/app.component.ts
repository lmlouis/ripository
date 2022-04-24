import {Component, OnInit} from '@angular/core';
import {AppareilService} from "./services/appareil.service";
//import librairi des composants

//decorateur composant

@Component({
  selector: 'app-root', //definie le selecteur css
  templateUrl: './app.component.html', //definie le code html
  styleUrls: ['./app.component.scss'] //definie me style
})

// déclaration d'une class
export class AppComponent implements OnInit{
  /* lastUpdate = new Promise(
     (resolve, reject)  =>{
       const date = new Date();
       setTimeout(
         () =>{
           resolve(date);
         }, 2000
       );
     }
   )*/
  lastUpdate = new Date();
  mesAppareils : any [] = [];
//
//
//   appareilName = "Fer à repasser"
//   appareilOne = "frigo";
//   appareilTwo= "Machine à laver";
//   title = 'mon-projet-angular';
//   appareilStatus= 'allumé';


  isAuth = false;


  constructor(private  appareilservice : AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 400)
  }
  ngOnInit() {
    this.mesAppareils = this.appareilservice.appareils;
  }

  onAlumer(){
    console.log("on alume tous");
  }
}
