import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/personne.model';
import { RDV } from 'src/app/Model/rdv.model';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { PersonneServiceService } from 'src/app/Service/personne-service.service';
import { RDVServiceService } from 'src/app/Service/rdvservice.service';

@Component({
  selector: 'app-rdvcomponent',
  templateUrl: './rdvcomponent.component.html',
  styleUrls: ['./rdvcomponent.component.css']
})
export class RDVComponentComponent implements OnInit{
  
  rdvs!:RDV[]
  rdv!:RDV
  idpersonne!:number
  personnes!:Personne[]
  user!:Utilisateur
  personne!:Personne


  constructor (private rservice:RDVServiceService, private pservice : PersonneServiceService) {}
  
  ngOnInit(): void {
    this.afficherAll();
    this.rdv = new RDV()
    if(sessionStorage.getItem('user')){
      let chaine = sessionStorage.getItem('user') ?? "";
      this.user = JSON.parse(chaine);
    }
    this.afficherPersonne();
  }

  afficherAll(){
    this.rservice.getAll().subscribe(response => this.rdvs = response)
  }

  afficherPersonne(){
    this.pservice.getAll().subscribe(response => this.personnes = response)
  }

  ajout(){
    console.log(this.idpersonne)
    this.pservice.getbyId(this.idpersonne).subscribe(response =>
      {
        this.personne = response;
        console.log(this.personne)
        this.rdv.personne = this.personne;
        console.log(this.user)
        this.rdv.commercial.id = this.user.id;
        this.rservice.post(this.rdv).subscribe(response => 
          {
            this.afficherAll();
            this.rdv = new RDV()
            this.afficherPersonne();
          })
      })
  }

}
