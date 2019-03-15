import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Terminal } from './terminal';
@Injectable()
export class TerminalService {
    private url = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) {
  }

  getAllTerminals(): Observable<any> {
    const getItemUrl = this.url + 'fetchterminal';
    return this
            .http
            .get(getItemUrl)
            .map(res => {
              return res;
            });
  }

  addTerminal(terminal: Terminal) {
    console.log(JSON.stringify(terminal));
     const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
        const options =  {
            headers: headers
        };
   // console.log(JSON.stringify({username: username, password: password}))
    return this.http.post<any>(this.url + 'registerterminal', JSON.stringify(terminal), options)
      .do(
        response => {
         return response;
        }
      );
  }


  deleteTerminal(terminalid): Observable<any> {
    const getItemUrl = this.url + 'deleteterminal/' + terminalid;
    // let params= new URLSearchParams();
    // params.set('id', terminalid);
    return this.http.get(getItemUrl)
    .map(
      res => {
        return res;
      }
    );
  }

}
