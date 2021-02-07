import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardCodedAuthenticationServiceService } from './hard-coded-authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{
  

  constructor(private hardCodedAuthenticationServiceService : HardCodedAuthenticationServiceService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardCodedAuthenticationServiceService.isUserLogedIn()){ 
      return true;
    }
    this.router.navigate(["login"])
    console.log('to the login page')
    return false;
  }
}
