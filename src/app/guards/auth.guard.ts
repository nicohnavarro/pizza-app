import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  notyf:Notyf;
  constructor(private authSvc:AuthService){
    this.notyf = new Notyf();
  } 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authSvc.user.email?.includes('@')) {
        return true
      }
      else {
        this.notyf.error('You are not Logged')
        return false
      }
  }
  
}
