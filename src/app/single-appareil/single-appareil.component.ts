import { Component, OnInit } from '@angular/core';
import {AppareilService} from "../services/appareil.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  name: string = 'Appareil';
  status: string = 'Status';

  constructor(private appareilService: AppareilService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    // @ts-ignore
    this.name = this.appareilService.getAppareilByID(+id).nom; // +id pour le caster id en number
    // @ts-ignore
    this.status = this.appareilService.getAppareilByID(+id).statut;
  }

}
