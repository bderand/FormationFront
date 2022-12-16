import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/personne.model';
import { ParticipantServiceService } from 'src/app/Service/participant-service.service';
import { PersonneServiceService } from 'src/app/Service/personne-service.service';
import { ParticipantComponentComponent } from '../participant-component/participant-component.component';

@Component({
  selector: 'app-personne-component',
  templateUrl: './personne-component.component.html',
  styleUrls: ['./personne-component.component.css']
})
export class PersonneComponentComponent implements OnInit{
  
  personnes!:Personne[]
  personne!:Personne
  num!:number[]
  
  ngOnInit(): void {
    this.afficherAll()
    this.personne = new Personne()
    this.num = [0]  
  }

  constructor(private pservice : PersonneServiceService, private paservice : ParticipantServiceService) {}

  afficherAll(){
    this.pservice.getAll().subscribe(response => this.personnes=response);
  }

  ajout(): void{
   
    this.pservice.post(this.personne).subscribe(response =>
      {
        this.afficherAll()
        this.personne = new Personne()
      },
    err=>
    {
      console.log(err.message);
    })
  }

  supprimer(id:number){
    this.pservice.delete(id).subscribe(response =>
      {
        this.afficherAll()
      })
  }

  modifier(id:number){
    this.pservice.getbyId(id).subscribe(response =>
      {
        this.personne = response;
        this.afficherAll();
      })
  }

  affectation(id:number){
    this.pservice.getbyId(id).subscribe(response =>
      {
        this.personne = response;
        let formData = new FormData();
        console.log(this.personne)
        formData.append("personne", ""+this.personne);
        formData.append("id_formation", ""+this.num);
        this.paservice.postparticipant(formData).subscribe(response =>
          {
            this.afficherAll();
            this.personne = new Personne();
          })

      })
  }

}
