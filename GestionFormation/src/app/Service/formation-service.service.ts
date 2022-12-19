import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Formateur } from '../Model/formateur.model';
import { Formation } from '../Model/formation.model';
import { Participant } from '../Model/participant.model';


@Injectable({
  providedIn: 'root'
})
export class FormationServiceService {


  url:string = "http://localhost:8020/api/Formations"

  constructor(private http:HttpClient) { }


  public getFormations_all(){

    return this.http.get<Formation[]>(this.url);
  }

  public getFormations_id(id:number){

    return this.http.get<Formation>(this.url + `/${id}`);
  }

  public getFormation_participants(id:number){

    return this.http.get<Participant[]>(this.url + `/${id}/participants`);
  }

  public addFormateur(data:FormData){

    return this.http.post<Formateur>(this.url + "/formateur",data);
  }

  public addFormation(formation:Formation){

    return this.http.post(this.url, formation);
  }

  public suppFormation(id:number){

   return this.http.delete(this.url + `/${id}`);
  }

}
