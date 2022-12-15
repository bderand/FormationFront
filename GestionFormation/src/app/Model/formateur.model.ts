import { Formation } from "./formation.model";
import { Personne } from "./personne.model";
import { Utilisateur } from "./utilisateur.model";

export class Formateur extends Utilisateur{

    formations!:Formation[]
}
