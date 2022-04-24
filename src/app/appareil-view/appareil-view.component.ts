import { Component, OnInit } from '@angular/core';
import {AppareilService} from "../services/appareil.service";

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
    this.appareilservice.switchOnAll();
  }

  onEteint() {
    this.appareilservice.switchOffAll();
  }

}
