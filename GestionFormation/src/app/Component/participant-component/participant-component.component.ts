import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/Model/formation.model';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
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

  constructor(private pservice : ParticipantServiceService){}

  ngOnInit(): void {
    if(sessionStorage.getItem('user')){
      let chaine = sessionStorage.getItem('user') ?? "";
      this.user = JSON.parse(chaine);
    }
    this.afficheF();
  }

  afficheF(){
    this.pservice.getFormations_participantsID(this.user.id).subscribe(response => this.formations = response)
  }


}
