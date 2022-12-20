import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RDV } from '../Model/rdv.model';

@Injectable({
  providedIn: 'root'
})
export class RDVServiceService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<RDV[]>('http://localhost:8020/api/rdvs')
  }

  getbyId(id:number){
    return this.http.get<RDV>(`http://localhost:8020/api/rdvs/${id}`)
  }

  getbycommercial(id:number){
    return this.http.get<RDV[]>(`http://localhost:8020/api/rdvs/commercial/${id}`)
  }

  post(rdv:RDV){
    return this.http.post<RDV>('http://localhost:8020/api/rdvs',rdv)
  }


  delete(id:number){
    return this.http.delete<RDV>(`http://localhost:8020/api/rdvs/${id}`)
  }

  
}
