import { Formation } from "./formation.model";
import { Participant } from "./participant.model";

export class Paiement {
    id!:number;
    reste!:number;
    participant!:Participant;
    formation!:Formation
}
