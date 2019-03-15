import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {AuthHelperService} from './auth-helper.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as JWT from 'jwt-decode';


@Injectable()
export class AuthService {
  private baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient , private authHelper: AuthHelperService) {

   }

   loginUser(username: string, password: string) {
   // console.log(param);
     const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        const options =  {
            headers: headers
        };
   // console.log(JSON.stringify({username: username, password: password}))
    return this.http.post<{accessToken: string, tokenType: string}>
    (this.baseUrl + 'auth/login',  JSON.stringify({username: username, password: password}), options)
      .do(
        response => {
          this.authHelper.setSession(response.accessToken);
          const decodedtoken = JWT(response.accessToken);
          this.authHelper.setUsername(decodedtoken['sub']);
        }
      );
  }


}
