import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
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

  affectation(data : FormData){
    return this.http.post<boolean>('http://localhost:8020/api/participants/affectation',data);
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

  public getPDF(data:FormData): Observable<Blob> {   
    let uri = 'http://localhost:8020/api/participants/pdf';
    return this.http.post(uri, data , { responseType: 'blob' });
}

}
