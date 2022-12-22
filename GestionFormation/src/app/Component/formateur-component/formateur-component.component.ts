import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/Model/formateur.model';
import { Formation } from 'src/app/Model/formation.model';
import { FormateurServiceService } from 'src/app/Service/formateur-service.service';

@Component({
  selector: 'app-formateur-component',
  templateUrl: './formateur-component.component.html',
  styleUrls: ['./formateur-component.component.css']
})

export class FormateurComponentComponent implements OnInit {

  formateurs!:Formateur[];
  formateur!:Formateur;
  afficher!:boolean;
  formations!:Formation[];

  constructor(private formateurService:FormateurServiceService, private route:Router){}

  ngOnInit(): void {

    this.formateur = new Formateur();
    this.afficher =false;
    this.getFormateurs_all();
  }


  getFormateurs_all(){
    this.formateurService.getFormateur_all().subscribe(reponse=>
      {
        this.formateurs = reponse;
        for(let f of this.formateurs){
          this.formateurService.getFormateur_formations(f.id).subscribe(reponse2=>
            {
              f.formations = reponse2;
            },
            error=>
            {
              console.log(error);
            })
        }
      },
      error2=>
      {
        console.log('erreur')
        console.log(error2.message);
      }
      )
  }


  ajouter(f:NgForm){

    if(f.valid){
      this.formateurService.ajoutFormateur(this.formateur).subscribe(response=>
        {
          this.ngOnInit();
          this.route.navigateByUrl("/admin/formateur");
        }
        ,error=>
        {
          console.log(error);
        });
    }
    else
    {
      window.alert("Vérifiez les informations saisies");
    }
  }

  supprimer(id:number){

    this.formateurService.suppFormateur(id).subscribe(reponse=>
      {
        this.ngOnInit();
        this.route.navigateByUrl("/admin/formateur");
      });
  }

  modifier(id:number){

    this.formateurService.getFormateur_id(id).subscribe(reponse=>
      {
        this.formateur = reponse;
      })
  }

  redirectFormation(tableau:Formation[]){
    this.formations = tableau;
    this.afficher = true;
    //this.route.navigateByUrl(`/formation/${id}`);
  }



}
