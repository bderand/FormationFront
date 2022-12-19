import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Commercial } from 'src/app/Model/commercial.model';
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
    
    this.rdv = new RDV()
    if(sessionStorage.getItem('user')){
      let chaine = sessionStorage.getItem('user') ?? "";
      this.user = JSON.parse(chaine);
    }
    this.afficherPersonne();
    this.afficherAll();
  }

  afficherAll(){
    this.rservice.getbycommercial(this.user.id).subscribe(response => this.rdvs = response)
  }

  afficherPersonne(){
    this.pservice.getAll().subscribe(response => this.personnes = response)
  }

  ajout(f:NgForm){
    if(f.valid){
      this.pservice.getbyId(this.idpersonne).subscribe(response =>
      {
        this.personne = response;
        this.rdv.personne = this.personne;
        this.rdv.commercial = new Commercial();
        this.rdv.commercial.id = this.user.id;
        this.rservice.post(this.rdv).subscribe(response => 
          {
            this.afficherAll();
            this.rdv = new RDV()
            this.afficherPersonne();
          })
      })
    } else {
      window.alert("Vérifiez les informations saisies");
    }
    
  }

  supprimer(id:number){
    this.rservice.delete(id).subscribe(response =>
      {
        this.afficherAll();
        this.rdv = new RDV();
        this.afficherPersonne();
      })
  }

  modifier(id:number){
    this.rservice.getbyId(id).subscribe(response =>
      {
        this.afficherAll();
        this.rdv = response;
        this.afficherPersonne();
      })
  }

  historique(id:number){
    this.rservice.getbyId(id).subscribe(response =>
      {
        window.location.replace('commercial/historique/'+id)
      })
  }

}
