import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Commercial } from 'src/app/Model/commercial.model';
import { Historique } from 'src/app/Model/historique.model';
import { Personne } from 'src/app/Model/personne.model';
import { RDV } from 'src/app/Model/rdv.model';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { HistoriqueServiceService } from 'src/app/Service/historique-service.service';
import { PersonneServiceService } from 'src/app/Service/personne-service.service';
import { RDVServiceService } from 'src/app/Service/rdvservice.service';
import { MonCompteComponent } from '../mon-compte/mon-compte.component';

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
  date!:Date
  r!:RDV
  h!:Historique[]
  bo!: Map<number,boolean>[]



  constructor (private rservice:RDVServiceService, private pservice : PersonneServiceService, private hservice : HistoriqueServiceService) {}
  
  ngOnInit(): void {
    
    this.rdv = new RDV()
    this.rdv.rdv = new Date()
    this.date = new Date()
    this.r = new RDV()
    

    if(sessionStorage.getItem('user')){
      let chaine = sessionStorage.getItem('user') ?? "";
      this.user = JSON.parse(chaine);
    }
    this.afficherPersonne();
    this.afficherAll();
    this.bo.length = this.afficherAll.length
  }


  afficherAll(){
    this.rservice.getbycommercial(this.user.id).subscribe(response => 
      {
        this.rdvs = response
        this.rdvs.sort((a, b) => new Date(b.rdv).getTime() - new Date(a.rdv).getTime());
        //this.rdvs.filter(a => new Date(a.rdv).getTime == new Date().getTime)
      })

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
        console.log(this.rdv.rdv);
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
        console.log(this.rdv.rdv.getTime)
        console.log(new Date().getTime())
        this.afficherPersonne();
      })
  }

  historique(id:number){
    this.rservice.getbyId(id).subscribe(response =>
      {
        window.location.replace('commercial/historique/'+id)
      })
  }

  checkdate(d:Date){
    let da = new Date(d)
    console.log(da.getTime())
    if(da.getTime() > new Date().getTime()){
      return true
    } else {
      return false
    }
  }

  checkhistorique(id:number){
    this.rservice.getbyId(id).subscribe(response =>
      {
        this.hservice.getAll().subscribe(response2 =>
          {
            this.r = response
            this.h = response2
            for(var i=0; i<this.h.length; i++){
              if(this.h[i].commercial.id == this.r.commercial.id && this.h[i].personne.id == this.r.personne.id ){
                this.bo[i].set(this.h[i].commercial.id, true)
              } else {
                this.bo[i].set(this.h[i].commercial.id,false);
              }
            }
            
          })
      })
  }


}
