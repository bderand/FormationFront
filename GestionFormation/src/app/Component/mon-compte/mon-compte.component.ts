import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { PersonneServiceService } from 'src/app/Service/personne-service.service';
import { UtilisateurServiceService } from 'src/app/Service/utilisateur-service.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {

  user!:Utilisateur;
  modif!:boolean;
  modif2!:boolean;
  hidden1!:boolean;
  hidden2!:boolean;

  mpts!:string;
  mpts_new!:string;


  constructor(private utilisateurService:UtilisateurServiceService, private userService:UtilisateurServiceService ,private route:Router){}
  ngOnInit(): void {
    
    this.hidden1 = true;
    this.hidden2 = true;
    this.modif = false;
    this.modif2 = false;
    let session = sessionStorage.getItem("user") ?? "";
    this.user = JSON.parse(session);
    

  }

  onSubmit(f:NgForm){
    
    if(f.valid)
    {
      this.utilisateurService.addUtilisateur(this.user).subscribe(response=>
        {
          sessionStorage.clear();
          let header = new HeaderComponent(this.route);
          header.reload();
        }
        ,error=>
        {
          console.log(error);
        });
    }
    else
    {
      window.alert("Vérifiez les informations");
    }
  }

  onSubmit_2nd(f:NgForm){

    let data = new FormData();
    data.append("mpts_new",this.mpts_new);
    data.append("mpts", this.mpts);
    data.append("id_user", `${this.user.id}`);
    this.userService.isCorrectPassword(data).subscribe(response=>
      {
        if(response)
        {
          sessionStorage.clear();
          let header = new HeaderComponent(this.route);
          header.reload();
        }
        else
        {
          window.alert("Mots de passe incorrect");
        }
        
        
      });

  }

  modifCompte(){

    var btn = document.getElementById('btn');
    btn?.parentNode?.removeChild(btn);
    this.modif = true;
    this.hidden1 = false;
   
  }

  modifMpts(){

    this.hidden2 = false;
    this.modif2 = true;
    var btn = document.getElementById('btn2');
    btn?.parentNode?.removeChild(btn);
  }
}
