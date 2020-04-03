import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceinfoService {

  xmlResponse: any;

  constructor(private http: HttpClient) { }

  xmlToCapabilities() {

  }

  getCapabilities_GET(serviceUrl, version): any {
    const myParams: HttpParams = new HttpParams().set('Service', 'WPS').set('Request', 'GetCapabilities').set('Version', version);
    const myHeaders: HttpHeaders = new HttpHeaders();

    this.http.get(serviceUrl, {headers: myHeaders, params: myParams, responseType: 'text'})
    .subscribe((data) => {
      this.xmlResponse = data;
    });

    return this.xmlResponse;
  }

}
