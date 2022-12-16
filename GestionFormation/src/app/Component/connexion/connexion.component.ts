import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { UtilisateurServiceService } from 'src/app/Service/utilisateur-service.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit{
 

  username!:string
  password!:string
  user!:Utilisateur;
  router!:Router;
  message!:string;

  constructor(private userService:UtilisateurServiceService){}
  
  ngOnInit(): void {
    this.username = ""
    this.password = ""
    this.user = new Utilisateur()

  }

  


  login() {  
  this.userService.login(this.username,this.password).subscribe(response =>
    {
      //this.auth=response;
      sessionStorage.setItem("token", "Bearer "+ response.jwt)
      console.log(sessionStorage.getItem("token"))
      this.userService.loginUser(this.username).subscribe(response2 =>
        {
          this.user=response2;
          sessionStorage.setItem('user', JSON.stringify(this.user));
          window.location.replace('/formation')
             

        } )
      
    },
    err=> 
    {
      console.log(err.message)
      this.message = "erreur de connexion"
    });
  
  }  
}
