import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne } from 'src/app/Model/personne.model';
import { Utilisateur } from 'src/app/Model/utilisateur.model';
import { PersonneServiceService } from 'src/app/Service/personne-service.service';

@Component({
  selector: 'app-message-component',
  templateUrl: './message-component.component.html',
  styleUrls: ['./message-component.component.css']
})
export class MessageComponentComponent  implements OnInit{
  
  id!:number
  message!:string
  personne!:Personne
  user!:Utilisateur
  titre!:string
  info!:string

  constructor(private route:ActivatedRoute, private pservice:PersonneServiceService){}
  
  ngOnInit(): void {
    this.id =+ this.route.snapshot.params['id'];
    this.message = ""
    let chaine = sessionStorage.getItem('user') ?? "";
    this.user = JSON.parse(chaine);
    this.pservice.getbyId(this.id).subscribe(response => this.personne = response)
    this.titre =""
    this.info = ""
  }

  ajout(){
    let formData = new FormData();
    formData.append("titre", this.titre);
    formData.append("message", this.message);
    formData.append("idu", ""+this.user.id);
    this.pservice.contact(formData, this.id).subscribe(response => 
      {
        this.message = ""
        this.titre =""
        this.info = "votre message a été envoyé"
      })
  }


}
