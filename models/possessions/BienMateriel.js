import Possession from "./Possession.js";
export default class BienMateriel extends Possession {
  constructor(possesseur, libelle, valeur, dateDebut, dateFin, tauxAmortissement) {
    super(possesseur, libelle, valeur, dateDebut, dateFin, tauxAmortissement);
  }

  getValeur(date) {
    return this.calculerDepreciation(this.valeur,this.tauxAmortissement,this.dateDebut,date)
  }

    // super.getValeur(date);
  calculerDepreciation(valeurInitiale, tauxPerteAnnuel, dateAchat, dateCible) {
    
    
  
    const dateAchatObj = new Date(dateAchat);
    const dateCibleObj = new Date(dateCible);
    
    
    const differenceTemps = dateCibleObj - dateAchatObj;
    
    const joursDiff = differenceTemps / (1000 * 60 * 60 * 24);
    
    
    const anneesDiff = joursDiff / 365.25;
    
    
    
    const facteurDepreciation = Math.pow(tauxPerteAnnuel -1, anneesDiff);
    
    
   
    const valeurActuelle = valeurInitiale * facteurDepreciation;
    
    
    
    return valeurActuelle;
  }
}

const pc = new BienMateriel("atody", "vary",4000000, new Date("2022-03-05"), new Date("2022-07-05"),8)




console.log(pc.getValeur(new Date("2022-07-05")))