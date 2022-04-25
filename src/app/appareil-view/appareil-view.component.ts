import { Component, OnInit } from '@angular/core';
import {AppareilService} from "../services/appareil.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
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
  appareilSubscription = Subscription;
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
    // @ts-ignore
    this.appareilSubscription = this.appareilservice.appareilSubject.subscribe(
      (Appareils: any [])=>{

        this.mesAppareils = Appareils;
    },
    );//après la subscription on emmet
    this.appareilservice.emitAppareilSubject();
  }

  onAlumer(){
    this.appareilservice.switchOnAll();
  }

  onEteint() {
    this.appareilservice.switchOffAll();
  }

  //evenement lors de la sauvegarde des données dans BD
  onSave() {
    this.appareilservice.saveAppareilToServer();
  }
  //evenement lors de la recuperation des données depuis la BD
  onFetch() {
    this.appareilservice.getAppareilsFromServer();
  }
}
