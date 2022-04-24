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
  switchOfAll(){for(let appareil of this.appareils){appareil.statut = "éteint"}}
}
