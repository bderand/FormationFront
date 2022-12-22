import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../Model/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {

  constructor(private http:HttpClient) { }

  login(username:string,password:string){
    return this.http.post<any>('http://localhost:8020/api/authenticates', {username,password});
  }

  loginUser(username:string){
    return this.http.get<Utilisateur>(`http://localhost:8020/api/utilisateurs/username/${username}`);
  }

  isCorrectPassword(data:FormData){

    return this.http.post("http://localhost:8020/api/utilisateurs/matched", data);
  }

  addUtilisateur(user:Utilisateur){

    return this.http.post("http://localhost:8020/api/utilisateurs",user);
  }

  getAll(){
    return this.http.get<Utilisateur[]>("http://localhost:8020/api/utilisateurs");
  }

  delete(id:number){
    return this.http.delete<Utilisateur>(`http://localhost:8020/api/utilisateurs/${id}`);
  }

  getbyid(id:number){
    return this.http.get<Utilisateur>(`http://localhost:8020/api/utilisateurs/${id}`);
  }
  
}
