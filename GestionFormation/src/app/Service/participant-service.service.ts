import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getFormations_participantsID(id:number){
    return this.http.get<Formation[]>(`http://localhost:8020/api/participants/${id}/formations`);
  }

  getParticipants_all(){

    return this.http.get<Participant[]>('http://localhost:8020/api/participants');
  }

  getParticipant_id(id:number){

    return this.http.get<Participant>(`http://localhost:8020/api/participants/${id}`)
  }

  demanderPaiement(data:FormData){

    return this.http.post("http://localhost:8020/api/participants/paiement",data);

  }

  envoiPaiement(data:FormData){

    return this.http.post("http://localhost:8020/api/participants/envoi/paiement",data);
  }

  getPDF(data:FormData) : Observable<Blob> {
    return this.http.post<Blob>("http://localhost:8020/api/participant/pdf",data);
  }


}
