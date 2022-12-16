import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from '../Model/formateur.model';
import { Formation } from '../Model/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormateurServiceService {

  constructor(private http:HttpClient) { }

  url:string = "http://localhost:8020/api/Formateurs";

  public getFormateur_all(){
    
    return this.http.get<Formateur[]>(this.url);
  }

  public getFormateur_id(id:number){

    return this.http.get<Formateur>(this.url + `/${id}`);
  }

  public getFormateur_formations(id:number){

    return this.http.get<Formation[]>(this.url + `${id}/formations`);
  }

  public ajoutFormateur(formateur:Formateur){
    
    this.http.post(this.url,formateur);
  }

  public modifFormateur(formateur:Formateur){

    this.http.put(this.url, formateur);
  }

  public suppFormateur(id:number){

    this.http.delete(this.url + `/${id}`);
  }

}
