import { Historique } from "./historique.model";
import { Personne } from "./personne.model";
import { RDV } from "./rdv.model";
import { Utilisateur } from "./utilisateur.model";

export class Commercial extends Utilisateur{

    rdv!:RDV[]
    historiques!:Historique[]
}

