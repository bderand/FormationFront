import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formation } from 'src/app/Model/formation.model';
import { Personne } from 'src/app/Model/personne.model';
import { FormateurServiceService } from 'src/app/Service/formateur-service.service';
import { FormationServiceService } from 'src/app/Service/formation-service.service';
import { ParticipantServiceService } from 'src/app/Service/participant-service.service';
import { PersonneServiceService } from 'src/app/Service/personne-service.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{
  

  idpersonne!:number
  idformation!:number
  personnes!:Personne[]
  formations!:Formation[]
  message!:string

  constructor ( private pservice : ParticipantServiceService, private fservice : FormationServiceService) {}

  ngOnInit(): void {
    this.afficherP();
    this.afficherF();
    this.message = "";
  }

  afficherP(){
    this.pservice.getAll().subscribe(response => this.personnes=response)
  }

  afficherF(){
    this.fservice.getFormations_all().subscribe(response => this.formations=response)
  }

  ajout(f:NgForm){
    if(f.valid){
      let formData = new FormData();
      formData.append("idp",""+this.idpersonne);
      formData.append("idf",""+this.idformation);
      this.pservice.postformation(formData).subscribe(response =>
      {
          this.afficherP();
          this.afficherF();
          this.message = "vous avez affecté un participant à une formation"
      })
    }
  }

}
