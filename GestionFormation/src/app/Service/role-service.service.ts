import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../Model/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Role[]>('http://localhost:8020/api/roles')
  }

  getbyId(id:number){
    return this.http.get<Role>(`http://localhost:8020/api/roles/${id}`)
  }
  
}
