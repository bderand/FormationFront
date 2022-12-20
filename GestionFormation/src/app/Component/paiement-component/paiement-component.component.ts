import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Formation } from 'src/app/Model/formation.model';
import { Paiement } from 'src/app/Model/paiement.model';
import { Participant } from 'src/app/Model/participant.model';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { FormationServiceService } from 'src/app/Service/formation-service.service';
import { PaiementServiceService } from 'src/app/Service/paiement-service.service';
import { ParticipantServiceService } from 'src/app/Service/participant-service.service';

@Component({
  selector: 'app-paiement-component',
  templateUrl: './paiement-component.component.html',
  styleUrls: ['./paiement-component.component.css']
})

export class PaiementComponentComponent implements OnInit {

  paiements!:Paiement[];
  paiement!:Paiement;
  participants!:Participant[];
  participant!:Participant;
  formations!:Formation[];
  formation!:Formation;
  id_participant!:number;
  id_formation!:number | undefined;
  reste!:number;
  hidden!:boolean;
  hidden2!:boolean;
  exist!:boolean;
  demandeEnvoye!:boolean;
  user!:Utilisateur;

  constructor(private paiementService:PaiementServiceService, private participantService:ParticipantServiceService, private formationService:FormationServiceService){}

  ngOnInit(): void {
   
    this.exist = false;
    this.participant = new Participant();
    this.formation = new Formation();
    this.paiement = new Paiement();
    this.hidden = true;
    this.demandeEnvoye = false;
    this.hidden2 = true;
    this.getParticipants_all();
    this.getFormations_all();
    this.user = JSON.parse(sessionStorage.getItem('user') ?? "");
    if(this.user != null && this.user.role.nom == 'participant'){
      this.hidden = false;
      this.hidden2 = false;
      this.id_participant = this.user.id;
      this.getPaiements_participantId(this.id_participant);
    }
    

    
  }

  getFormations_all(){
    this.formationService.getFormations_all().subscribe(response=>
      {
        this.formations = response;
      })
  }

  getParticipants_all(){

    this.participantService.getParticipants_all().subscribe(response=>
      {
        this.participants = response;
      })
  }

  PaiementDisplay(id:number){

    this.getPaiements_participantId(id);
    this.getParticipantsId(id);
    this.hidden2 = true;
    if(this.id_participant == undefined)this.hidden = true;
    else this.hidden = false;
    this.id_formation = undefined;
  }

  getPaiements_formations(){

    let data = new FormData();
    data.append('id_participant', `${this.id_participant}`);
    data.append('id_formation',`${this.id_formation}`);
    if(this.id_formation != undefined)
    {
    this.paiementService.getPaiementByFormationAndParticipant(data).subscribe(response=>
      {
        this.paiement = response;
        this.paiementService.getRestantPaiement(data).subscribe(response2=>
          {
            this.reste = response2;
            this.isFormationExist();
          })
      });
      
        this.hidden2 = false;
        this.formationService.getFormations_id(this.id_formation).subscribe(response=>
          {
            this.formation = response;
          })
      }
      else
      {
        this.getPaiements_participantId(this.id_participant);
        this.hidden2 = true;
        this.exist = false;
      } 
  }

  getPaiements_participantId(id:number){
    
      this.paiementService.getbyParticipant(id).subscribe(response=>
      {
        this.paiements = response;
      })
      this.getParticipantsId(id);
  }

  getParticipantsId(id:number){
    
    this.participantService.getParticipant_id(id).subscribe(response=>
      {
        this.participant = response;
      })
    
  }

  demandePaiement(reste:number){

    let data = new FormData();
    data.append("reste",`${this.reste}`);
    data.append("id_participant", `${this.id_participant}`);
    data.append("id_formation",`${this.id_formation}`);
    this.participantService.demanderPaiement(data).subscribe(response=>
      {
        this.demandeEnvoye = true;
        this.hidden2 = false;
      });

  }

  isFormationExist(){
    this.exist = false;
    for(let p of this.paiements){
      if(p.formation.id == this.id_formation)
      {
        this.exist = true;
        break;
      }
    }
   
  }

}
