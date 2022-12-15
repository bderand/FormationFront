import { Commercial } from "./commercial.model";
import { Personne } from "./personne.model";

export class Historique {

    id!:number;
    appel!:Date;
    commentaire!:string;
    personne!:Personne;
    commercial!:Commercial;
}
