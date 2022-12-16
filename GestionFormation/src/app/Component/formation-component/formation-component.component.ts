import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/Model/formateur.model';
import { Formation } from 'src/app/Model/formation.model';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { FormateurServiceService } from 'src/app/Service/formateur-service.service';
import { FormationServiceService } from 'src/app/Service/formation-service.service';

@Component({
  selector: 'app-formation-component',
  templateUrl: './formation-component.component.html',
  styleUrls: ['./formation-component.component.css']
})

export class FormationComponentComponent implements OnInit {

  id_formateur!:number;
  formations!:Formation[];
  formation!:Formation;
  formateurs!:Formateur[];
  user!:Utilisateur | null;

  constructor(private formationService:FormationServiceService, private formateurService:FormateurServiceService, private router:ActivatedRoute, private route:Router){}


  ngOnInit(): void {

    this.formation = new Formation();
    this.formation.formateur = new Formateur();
    this.id_formateur = this.router.snapshot.params['id'];
    this.getFormateurs_all();
    let session = sessionStorage.getItem('user');
    if(session != null)
    {
      this.user = JSON.parse(session);
      console.log(this.user);
      if(this.user?.role.nom == 'formateur'){
        this.id_formateur = this.user.id;
       
      }
    }
    else
    {
      this.user = null;
    }

    if(this.id_formateur != undefined)
    {
      this.getFormations_idFormateur(this.id_formateur);
    }
    else
    {
      this.getFormations_all();
    }
  }

  getFormations_all(){
    this.formationService.getFormations_all().subscribe(reponse=>
      {
        this.formations = reponse;
        for(let f of this.formations){
          this.formationService.getFormation_participants(f.id).subscribe(reponse2=>
            {
              f.participants = reponse2;
            })
        }
      })
  }

  getFormations_idFormateur(id:number){

    this.formateurService.getFormateur_formations(id).subscribe(response=>
      {
        this.formations = response;
      })
  }

  getFormateurs_all(){

    this.formateurService.getFormateur_all().subscribe(response=>
      {
        this.formateurs = response;
      })
  }

  ajouter(f:NgForm){

    if(f.valid)
    {
      let data = new FormData();
      data.append("formation",JSON.stringify(this.formation));
      data.append("id_formateur", `${this.id_formateur}`);
      this.formationService.addFormateur(data).subscribe(response=>
        {
          this.ngOnInit();
          window.location.reload();
          
        });
    }
    else
    {
      window.alert("Vérifiez les informations saisies");
    }
  }

  modifier(id:number){

    this.formationService.getFormations_id(id).subscribe(response=>
      {
        this.formation = response;
        this.id_formateur = response.formateur.id;
      })

  }

  supprimer(id:number){

    this.formationService.suppFormation(id).subscribe(response=>
      {
        this.ngOnInit();
      })
  }


}
