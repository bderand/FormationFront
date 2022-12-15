import { Formation } from "./formation.model";
import { Paiement } from "./paiement.model";
import { Utilisateur } from "./utilisateur.model";

export class Participant extends Utilisateur{

    formations!:Formation[];
}
