import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/Model/formation.model';
import { Participant } from 'src/app/Model/participant.model';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { FormationServiceService } from 'src/app/Service/formation-service.service';
import { PaiementServiceService } from 'src/app/Service/paiement-service.service';
import { ParticipantServiceService } from 'src/app/Service/participant-service.service';

@Component({
  selector: 'app-participant-component',
  templateUrl: './participant-component.component.html',
  styleUrls: ['./participant-component.component.css']
})
export class ParticipantComponentComponent implements OnInit{
  
  formations!:Formation[]
  user!:Utilisateur
  participants!:Participant[]
  afficher!:boolean

  constructor(private pservice : ParticipantServiceService, private fservice : FormationServiceService){}

  ngOnInit(): void {
    if(sessionStorage.getItem('user')){
      let chaine = sessionStorage.getItem('user') ?? "";
      this.user = JSON.parse(chaine);
    }
    this.afficher = false;
    this.afficheF();
  }

  afficheF(){

    this.pservice.getbyparticipant(this.user.id).subscribe(response => 
      {
        this.formations = response
        for(let f of this.formations){
          this.fservice.getFormation_participants(f.id).subscribe(reponse2=>
            {
              
              f.participants = reponse2;
            })
      
          }
        })
  }

  afficherParticipants(tableau:Participant[]){

    this.participants = tableau;
    this.afficher = true;

  }


}
