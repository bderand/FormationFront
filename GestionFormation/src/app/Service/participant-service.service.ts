import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../Model/formation.model';
import { Participant } from '../Model/participant.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipantServiceService {

  constructor(private http:HttpClient) { }

  postparticipant(data :  FormData){
    return this.http.post<Participant>('http://localhost:8020/api/participants/nouveau',data);
  }

  postformation(data:FormData){
    return this.http.post<Participant>('http://localhost:8020/api/participants/affectation', data)
  }

  getAll(){
    return this.http.get<Participant[]>('http://localhost:8020/api/participants')
  }

  getbyparticipant(id:number){
    return this.http.get<Formation[]>(`http://localhost:8020/api/participants/${id}/formations`)
  }
}
