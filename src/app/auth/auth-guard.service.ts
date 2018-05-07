import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthHelperService} from "../auth/auth-helper.service";

//import {* as decode} from 'jwt-decode';
@Injectable()
export class AuthGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //console.log("wwlcome");
     //console.log(this.authHelper.isLoggedIn());
  //    const expectedRole = route.data.expectedRole;
  //   console.log( expectedRole);
  //   const t = JWT(this.authHelper.getToken());
  //  console.log(t['scopes']);
    if(this.authHelper.isLoggedIn()) {

      return true;
    }
  
    this.router.navigate(['login']);
    return false;
  }

  constructor(private authHelper: AuthHelperService, private router: Router) {
  }

}
