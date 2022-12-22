import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/Model/role.model';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { RoleServiceService } from 'src/app/Service/role-service.service';
import { UtilisateurServiceService } from 'src/app/Service/utilisateur-service.service';

@Component({
  selector: 'app-utilisateur-component',
  templateUrl: './utilisateur-component.component.html',
  styleUrls: ['./utilisateur-component.component.css']
})
export class UtilisateurComponentComponent implements OnInit{
  
  roles!:Role[]
  utilisateur!:Utilisateur
  idrole!:number
  utilisateurs!:Utilisateur[]
  role!:Role

  constructor(private rservice : RoleServiceService, private uservice : UtilisateurServiceService){}
  
  ngOnInit(): void {
    this.afficher_role();
    this.utilisateur = new Utilisateur();
    this.idrole = 0;
    this.role = new Role();
    this.afficherAll();
  }

  afficher_role(){
    this.rservice.getAll().subscribe(response => this.roles = response)
  }

  afficherAll(){
    this.uservice.getAll().subscribe(response => this.utilisateurs = response)
  }

  supprimer(id:number){
    this.uservice.delete(id).subscribe(response =>
      {
        this.afficherAll();
        this.afficher_role();
      })
  }

  modifier(id:number){
    this.uservice.getbyid(id).subscribe(response =>
      {
        this.utilisateur = response;
        this.afficherAll();
      })
  }

  ajout(): void{
   
    this.rservice.getbyId(this.idrole).subscribe(response =>
      {
        this.role = response;
        this.utilisateur.role = this.role;
        this.uservice.addUtilisateur(this.utilisateur).subscribe(response =>
        {
          this.afficherAll()
          this.utilisateur = new Utilisateur()
          this.afficher_role();
        },
        err=>
        {
          console.log(err.message);
        })
      })
    
  }

  
}
