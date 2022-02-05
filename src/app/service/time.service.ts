import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeZoneResponse } from 'src/app/response/timeZoneResponse';
import { RequestTime } from 'src/app/model/Time';

const baseUrl = 'https://spring-format-transformet-serv.herokuapp.com/api/transform-time/json';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  create(request: RequestTime): Observable<TimeZoneResponse> {
    return this.http.post<TimeZoneResponse>(baseUrl, request);
  }
}
