import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
@Injectable()
export class TransactionService {
    private url: string = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) {
  }

  getAllTransactions(): Observable<any> {
    
    const getItemUrl = this.url + 'fetchtransaction';
    return this
            .http
            .get(getItemUrl)
            .map(res => {
              return res;
            });
  }

}