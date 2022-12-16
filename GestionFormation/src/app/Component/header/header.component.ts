import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/Model/utilisateur.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  user!:Utilisateur

  constructor(private route:Router){}
  
  ngOnInit(): void {
    if(sessionStorage.getItem('user')){
      let chaine = sessionStorage.getItem('user') ?? "";
      this.user = JSON.parse(chaine);
      //this.route.navigate(['/afficherCitoyen'])
    }
  }

  reload(): void
  {
    window.location.replace('/connexion');
  }


  logout(){
    sessionStorage.clear();
    sessionStorage.removeItem('user');
    this.reload(); 
  }
}
