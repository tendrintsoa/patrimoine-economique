import {writeFile, readFile} from "./data/index.js"
import Possession from "./models/possessions/Possession.js";
import Patrimoine from "./models/Patrimoine.js";
// import JSON from './data/data.json';


const Possessions =  [
    new Possession("moi", "pc", 40000,"2024-08-09",null,10), 
    new Possession("moi","phone",9000,"2024-08-09",null,10),
    new Possession("moi","phone",35000,"2024-08-09",null,20),
    new Possession("moi","phone",95000,"2024-08-09",null,20)
]


export const valeur=[
    { "model": "Personne", "data": { "nom": "moi" } },
    { "model": "Patrimoine","data": { "nom": "moi"}, possessions: Possessions}
]

export const maPatri = new Patrimoine("moi", Possessions)

console.log(Math.round(maPatri.getValeur("2024-08-09")));

// readFile("./data/data.json").then(d => console.log(d)
// )
writeFile("./data/data.json", valeur).then(d => console.log(d)).catch(function(err) {
    console.log(err);
    
})
// console.log(data);




