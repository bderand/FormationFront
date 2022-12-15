import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historique } from '../Model/historique.model';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueServiceService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Historique[]>('http://localhost:8020/api/historiques')
  }

  getbyId(id:number){
    return this.http.get<Historique>(`http://localhost:8020/api/historiques/${id}`)
  }

  getbyCommercial(id:number){
    return this.http.get<Historique[]>(`http://localhost:8020/api/historiques/commercial/${id}`)
  }

  post(historique:Historique){
    return this.http.put<Historique>('http://localhost:8020/api/historiques',historique)
  }


  delete(id:number){
    return this.http.delete<Historique>(`http://localhost:8020/api/historiques/${id}`)
  }

  
}
