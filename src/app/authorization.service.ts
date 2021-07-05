import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements HttpInterceptor {

  constructor() { }

    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{

      //intercepting logic
      let token=localStorage.getItem("token");

      //if token exists
      if(token){
        //add Bearer token to header of request object
       const clonedReqObj= req.clone({
          headers:req.headers.set("Authorization",`Bearer ${token}`)
        });
        //pass req obj to either next interceptor or API
        return next.handle(clonedReqObj)
      }
      //if token doesn't exist
      else{
        return next.handle(req)
      }
   
    }

}
