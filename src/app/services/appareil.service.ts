import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable() //injecter le service http client
export class AppareilService{

  appareilSubject = new Subject<any []>();
  private appareils = [/*
    {
      id: 1,
      nom : "Machine à glace ",
      statut : "éteint"
    },
    {
      id: 2,
      nom : "Cocote Minute ",
      statut : "éteint"
    },
    {
      id: 3,
      nom : "Congelateur ",
      statut : "allumé"
    }*/
  ];

  constructor(private httpClient: HttpClient) {
  }

  emitAppareilSubject(){
    this.appareilSubject.next(this.appareils.slice());
  }
  getAppareilByID(id: number){
    return this.appareils.find(
      (appareilObject) => {
        // @ts-ignore
        return appareilObject.id === id;
      }
    );
  }
  switchOnAll(){
    for(let appareil of this.appareils){ // @ts-ignore
      appareil.statut = "allumé"}
    //emition du subject
    this.emitAppareilSubject();
  }
  switchOffAll(){for(let appareil of this.appareils){ // @ts-ignore
    appareil.statut = "éteint"}
    //emition du subject
    this.emitAppareilSubject();}

  switchOnOne(index: number ){
    // @ts-ignore
    this.appareils[index].statut = "allumé";
    //emition du subject
    this.emitAppareilSubject();
  }
  switchOffOne(index: number){
    // @ts-ignore
    this.appareils[index].statut = "éteint";
    //emition du subject
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string){
    const appareilObject ={id : 0, nom: 'inconnu', statut: 'inconnu'};
    // ajout de l'appareil
    appareilObject.nom = name;
    appareilObject.statut = status;
    // @ts-ignore
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id +1;
    //mettre l'appaareil dans la list
    // @ts-ignore
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  // envoi des données dans firebase
  saveAppareilToServer(){
    //envoie des donner vers la BD firebase post et put(put ecrase une donnée deja existante si elle est dupliqué )
    this.httpClient.put('https://http-client-demo-c56f3-default-rtdb.europe-west1.firebasedatabase.app/appareil.json',
      this.appareils).subscribe(
      ()=>{
        alert('Enregistrement...');
      },
      (error)=>{
        alert('Erreur de sauvegarde'+ error);
      }
    )
  }

  //recuprer les données depuis firebase
  getAppareilsFromServer(){
    this.httpClient.get<any[]>('https://http-client-demo-c56f3-default-rtdb.europe-west1.firebasedatabase.app/appareil.json').subscribe(
      (response)=>{
        // @ts-ignore
        this.appareils = response;
        //mettre le subject pour la mise à jour des données lors de la recupération
        this.emitAppareilSubject();
      },
      (error)=>{
        alert('erreur ...'+error);
      }
    );
  }
}
