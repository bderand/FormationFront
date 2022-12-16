import { Formateur } from "./formateur.model";
import { Participant } from "./participant.model";

export class Formation {

    id!:number;
    nom!:string;
    prix!:number;
    debut!:Date;
    fin!:Date;
    formateur!:Formateur;
    participants!:Participant[];
}
