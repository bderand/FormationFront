import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../Model/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationServiceService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Formation[]>('http://localhost:8020/api/Formations')
  }

  getbyId(id:number){
    return this.http.get<Formation>(`http://localhost:8020/api/Formations/${id}`)
  }

  post(formation:Formation){
    return this.http.put<Formation>('http://localhost:8020/api/Formations',formation)
  }


  delete(id:number){
    return this.http.delete<Formation>(`http://localhost:8020/api/Formations/${id}`)
  }
}
