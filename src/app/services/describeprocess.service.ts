import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DescribeprocessService {
  xmlResponse: any;
  constructor(private http: HttpClient) { }

  xmlToCapabilities() {

  }

  describeProcess_GET(serviceUrl, version, processId): any {
    const myParams: HttpParams = new HttpParams()
                                    .set('Service', 'WPS')
                                    .set('Request', 'DescribeProcess')
                                    .set('Version', version)
                                    .set('identifier', processId);

    const myHeaders: HttpHeaders = new HttpHeaders();

    this.http.get(serviceUrl, {headers: myHeaders, params: myParams, responseType: 'text'})
    .subscribe((data) => {
      this.xmlResponse = data;
    });

    return this.xmlResponse;
  }

}
