import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paiement } from '../Model/paiement.model';

@Injectable({
  providedIn: 'root'
})
export class PaiementServiceService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Paiement[]>('http://localhost:8020/api/paiements')
  }

  getbyId(id:number){
    return this.http.get<Paiement>(`http://localhost:8020/api/paiements/${id}`)
  }

  getbyParticipant(id:number){
    return this.http.get<Paiement>(`http://localhost:8020/api/paiements/participant/${id}`)
  }

  getbyFormation(){
    return this.http.get<Paiement>(`http://localhost:8020/api/paiements/formation`)
  }

  post(paiement:Paiement){
    return this.http.put<Paiement>('http://localhost:8020/api/paiements',paiement)
  }


  delete(id:number){
    return this.http.delete<Paiement>(`http://localhost:8020/api/paiements/${id}`)
  }

  deleteAll(){
    return this.http.delete<Paiement>(`http://localhost:8020/api/paiements`)
  }

  postMessage(id:number){
    return this.http.get<Paiement>(`http://localhost:8020/api/paiements/contact/${id}`)
  }
}
