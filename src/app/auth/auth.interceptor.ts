import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {AuthHelperService} from "./auth-helper.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authHelper: AuthHelperService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authHelper.getToken();
    // const authReq = req.clone({
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'my-auth-token'
    //   })
    // });
    console.log("token"+token);
    if(token) {
      const clonedRequest = req.clone({
        // headers: req.headers.append('Content-Type', 'application/json',)
        // .append("Authorization", "Bearer " + token)
        headers: req.headers.append("Authorization", "Bearer " + token)
      });
      return next.handle(clonedRequest);
    }
    return next.handle(req);
  }

}