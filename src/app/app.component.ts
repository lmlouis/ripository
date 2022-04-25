

import {Component, OnInit, OnDestroy} from '@angular/core';
// @ts-ignore
import {Observable, Subscription} from 'rxjs';
import { interval } from 'rxjs';


//import librairi des composants

//decorateur composant

@Component({
  selector: 'app-root', //definie le selecteur css
  templateUrl: './app.component.html', //definie le code html
  styleUrls: ['./app.component.scss'] //definie me style
})

// déclaration d'une class
export class AppComponent implements OnInit, OnDestroy{

  seconde : number = 0;
  // @ts-ignore
  counterSubsciption: Subscription;

  constructor() {
  }
  ngOnInit() {

      //compteur
        const counter = interval(1000);

      // la subscription
      // @ts-ignore
      this.counterSubsciption = counter.subscribe(
        (value: number)=>{
          this.seconde = value;
        }

      );

    }

  ngOnDestroy(){//desctruction de la subscription
    this.counterSubsciption.unsubscribe();
  }

}
