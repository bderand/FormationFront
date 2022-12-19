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
  hidden1!:boolean;


  constructor(private personneService:PersonneServiceService, private route:Router){}
  ngOnInit(): void {
    
    this.hidden1 = true;
    this.modif = false;
    let session = sessionStorage.getItem("user") ?? "";
    this.user = JSON.parse(session);
    

  }

  onSubmit(f:NgForm){
    
    if(f.valid)
    {
      this.personneService.post(this.user).subscribe(response=>
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

  modifCompte(){

    var btn = document.getElementById('btn');
    btn?.parentNode?.removeChild(btn);
    this.modif = true;
    this.hidden1 = false;
   
  }
}
