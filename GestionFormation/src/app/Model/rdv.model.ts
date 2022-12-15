import { Commercial } from "./commercial.model";
import { Personne } from "./personne.model";

export class RDV {
    id!:number;
    commercial!:Commercial;
    personne!:Personne;
    rdv!:Date;
}
