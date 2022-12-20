import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Commercial } from 'src/app/Model/commercial.model';
import { Historique } from 'src/app/Model/historique.model';
import { Personne } from 'src/app/Model/personne.model';
import { RDV } from 'src/app/Model/rdv.model';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { HistoriqueServiceService } from 'src/app/Service/historique-service.service';
import { PersonneServiceService } from 'src/app/Service/personne-service.service';
import { RDVServiceService } from 'src/app/Service/rdvservice.service';

@Component({
  selector: 'app-historique-component',
  templateUrl: './historique-component.component.html',
  styleUrls: ['./historique-component.component.css']
})
export class HistoriqueComponentComponent implements OnInit{
  
  id!:number
  historiques!:Historique[]
  historique!:Historique
  user!:Utilisateur
  appel!:Date
  commentaire!:string
  rdv!:RDV
  date!:Date
  personne!:Personne
  st!:string
  message!:string

  constructor(private route:ActivatedRoute, private hservice:HistoriqueServiceService, private rservice:RDVServiceService, private pservice:PersonneServiceService){}
  
  ngOnInit(): void {
    this.id =+ this.route.snapshot.params['id'];
    if(sessionStorage.getItem('user')){
      let chaine = sessionStorage.getItem('user') ?? "";
      this.user = JSON.parse(chaine);
    }
    if(this.id == 0){
      this.afficherAll();
    } else {
      this.rservice.getbyId(this.id).subscribe(response =>
        {
          this.rdv = response;
          this.st = formatDate(this.rdv.rdv,'yyyy-MM-ddThh:mm', 'en-US');
          console.log("le format string : " + this.st)
          console.log(this.rdv.rdv);
          this.appel = this.rdv.rdv
          this.commentaire ="";
          this.historique = new Historique();
          this.message = "";
        })
    }
  }

  afficherAll(){
    this.hservice.getbyCommercial(this.user.id).subscribe(response => this.historiques = response)
  }

  ajout(f:NgForm){
    if(f.valid){
      this.rservice.getbyId(this.id).subscribe(response =>
      {
        this.rdv = response;
        console.log(this.rdv);
        this.historique.personne =  new Personne();
        this.historique.personne = this.rdv.personne;
        console.log(this.historique.personne)
        this.historique.commercial = new Commercial();
        this.historique.commercial.id = this.user.id;
        this.historique.commentaire = this.commentaire;
        this.historique.appel = this.appel;
        this.hservice.post(this.historique).subscribe(response => 
          {
            this.afficherAll();
            this.appel = new Date();
            this.commentaire ="";
            this.historique = new Historique();
            this.message = "vous avez enregistrez un historique"
            window.location.replace('commercial/rdv');
            
          })
      })
    } else {
      window.alert("Vérifiez les informations saisies");
    }
    
  }

  supprimer(id:number){
    this.hservice.delete(id).subscribe(response =>
      {
        this.afficherAll()
      })
  }


}
