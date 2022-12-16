import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../Model/personne.model';

@Injectable({
  providedIn: 'root'
})
export class PersonneServiceService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Personne[]>('http://localhost:8020/api/personnes')
  }

  getbyId(id:number){
    return this.http.get<Personne>(`http://localhost:8020/api/personnes/${id}`)
  }

  getbyName(nom:string){
    return this.http.get<Personne[]>(`http://localhost:8020/api/personnes/chercher/${nom}`)
  }

  post(personne:Personne){
    return this.http.put<Personne>('http://localhost:8020/api/personnes',personne)
  }


  delete(id:number){
    return this.http.delete<Personne>(`http://localhost:8020/api/personnes/${id}`)
  }

  contact(data : FormData){
    return this.http.post<Personne>('http://localhost:8020/api/personnes', data)
  }

  

}
