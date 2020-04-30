import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpParams, HttpHeaders } from '@angular/common/http';
import { Capabilities } from '../models/capabilities';

@Injectable({
  providedIn: 'root'
})
export class ServiceinfoService {

  xmlResponse: any;
  capabilitiesResponse: Capabilities;

  constructor(private http: HttpClient) { }

  getCapabilities_GET(serviceUrl, version): Observable<any> {
    const myParams: HttpParams = new HttpParams().set('Service', 'WPS').set('Request', 'GetCapabilities').set('Version', version);
    const myHeaders: HttpHeaders = new HttpHeaders();

    return this.http.get(serviceUrl, {headers: myHeaders, params: myParams, responseType: 'text'});
  }

}
