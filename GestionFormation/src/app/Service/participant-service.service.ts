import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from '../Model/participant.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipantServiceService {

  constructor(private http:HttpClient) { }

  postparticipant(data :  FormData){
    return this.http.post<Participant>('http://localhost:8020/api/participants/nouveau',data);
  }
}
