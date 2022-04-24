export class AppareilService{
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
  ];
  switchOnAll(){
    for(let appareil of this.appareils){appareil.statut = "allumé"}
  }
  switchOffAll(){for(let appareil of this.appareils){appareil.statut = "éteint"}}

  switchOnOne(index: number ){
    this.appareils[index].statut = "allumé";
  }
  switchOffOne(index: number){
    this.appareils[index].statut = "éteint";
  }
}
