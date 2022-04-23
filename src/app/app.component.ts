import {Component} from '@angular/core';//import librairi des composants

//decorateur composant

@Component({
  selector: 'app-root', //definie le selecteur css
  templateUrl: './app.component.html', //definie le code html
  styleUrls: ['./app.component.scss'] //definie me style
})

// déclaration d'une class
export class AppComponent {
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
  appareils = [
    {
      nom : "Machine à glace ",
      statut : "éteint"
    },
    {
      nom : "Cocote Minute ",
      statut : "éteint"
    },
    {
      nom : "Congelateur ",
      statut : "allumé"
    }
  ]
//
//
//   appareilName = "Fer à repasser"
//   appareilOne = "frigo";
//   appareilTwo= "Machine à laver";
//   title = 'mon-projet-angular';
//   appareilStatus= 'allumé';


  isAuth = false;


  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 400)
  }
  onAlumer(){
    console.log("on alume tous");
  }
}
