import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Utilisateur } from '../Model/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private router : Router) { } 

  user!:Utilisateur;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.isLoggedIn(route)) {      
        return true;      
        }      
        // navigate to login page as user is not authenticated      
        this.router.navigate(['/connexion']);      
         return false;      
  }      
  public isLoggedIn(r:ActivatedRouteSnapshot): boolean {      
     let status = false;
     let session = sessionStorage.getItem('user');
     let role = r.data['role'];    
     if (session) {      
        status = true;
        if(role == undefined)return true;   
        let chaine = sessionStorage.getItem('user') ?? "";
        let user = JSON.parse(chaine);
        if(r.data['role'] == user.role.nom)
          {
            return true;
          } else return false;   
     } else {      
        status = false;      
        }      
     return status;      
  } 
}
  

