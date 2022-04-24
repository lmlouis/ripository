export class AppareilService{
  appareils = [
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
  getAppareilByID(id: number){
    return this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
  }
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
