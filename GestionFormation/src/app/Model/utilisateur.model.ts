import { Personne } from "./personne.model";
import { Role } from "./role.model";

export class Utilisateur extends Personne{

    username!:string;
    password!:string;
    rolr!:Role;
}
