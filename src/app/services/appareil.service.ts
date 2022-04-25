import {Subject} from "rxjs";

export class AppareilService{

  appareilSubject = new Subject<any []>();
  private appareils = [
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
    }
  ];

  emitAppareilSubject(){
    this.appareilSubject.next(this.appareils.slice());
  }
  getAppareilByID(id: number){
    return this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
  }
  switchOnAll(){
    for(let appareil of this.appareils){appareil.statut = "allumé"}
    //emition du subject
    this.emitAppareilSubject();
  }
  switchOffAll(){for(let appareil of this.appareils){appareil.statut = "éteint"}
    //emition du subject
    this.emitAppareilSubject();}

  switchOnOne(index: number ){
    this.appareils[index].statut = "allumé";
    //emition du subject
    this.emitAppareilSubject();
  }
  switchOffOne(index: number){
    this.appareils[index].statut = "éteint";
    //emition du subject
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string){
    const appareilObject ={id : 0, nom: 'inconnu', statut: 'inconnu'};
    // ajout de l'appareil
    appareilObject.nom = name;
    appareilObject.statut = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id +1;
    //mettre l'appaareil dans la list
    // @ts-ignore
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }
}
