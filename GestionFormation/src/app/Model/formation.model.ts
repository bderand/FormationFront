import { Formateur } from "./formateur.model";

export class Formation {

    id!:number;
    nom!:string;
    prix!:number;
    debut!:Date;
    fin!:Date;
    formateur!:Formateur;
}
