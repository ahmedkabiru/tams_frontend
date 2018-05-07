import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {AuthHelperService} from "../auth/auth-helper.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import * as JWT from 'jwt-decode';


@Injectable()
export class AuthService {
  private baseUrl:string = 'http://localhost:8080/';
  //private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient ,private authHelper:AuthHelperService) {
     
   }

//    getAllTerminals(): Observable<any> {
//     // return this.http.get("api/fetchterminal");
    
//     const getItemUrl = this.baseUrl + 'api/fetchterminal';
//     return this
//             .http
//             .get(getItemUrl)
//             .map(res => {
//               return res;
//             });
//   }

   loginUser(username: string, password: string) {
   // console.log(param);
     var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        var options =  {
            headers: headers
        };
   // console.log(JSON.stringify({username: username, password: password}))
    return this.http.post<{accessToken: string,tokenType:string}>(this.baseUrl+'auth/login',  JSON.stringify({username: username, password: password}),options)
      .do(
        response => {
          this.authHelper.setSession(response.accessToken);
          const decodedtoken= JWT(response.accessToken);
          this.authHelper.setUsername(decodedtoken['sub']);
        }
      );
  }


}
