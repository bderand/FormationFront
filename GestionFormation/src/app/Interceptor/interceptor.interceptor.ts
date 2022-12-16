import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(sessionStorage.getItem("token")){
      let chaine = sessionStorage.getItem("token") ?? "";
      console.log(chaine)
      const headers = {Authorization : chaine};
      request = request.clone({
        setHeaders: headers
      })
     
      
    }
    return next.handle(request);
  }
}
