import {Component} from '@angular/core';
//import librairi des composants

//decorateur composant

@Component({
  selector: 'app-root', //definie le selecteur css
  templateUrl: './app.component.html', //definie le code html
  styleUrls: ['./app.component.scss'] //definie me style
})

// déclaration d'une class
export class AppComponent{
  title(title: any) {
      throw new Error('Method not implemented.');
  }
  constructor() {
  }

}
