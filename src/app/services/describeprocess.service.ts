import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ProcessOfferingResponse } from '../models/ProcessOfferingResponse';

@Injectable({
  providedIn: 'root'
})
export class DescribeprocessService {

  constructor(private http: HttpClient) { }

  getProcessOffering(url, version): any {
    const myParams: HttpParams = new HttpParams().set('Service', 'WPS').set('Request', 'DescribeProcess').set('Version', version);
    const headers: any = {
            params: myParams
        };
    return this.http.get<ProcessOfferingResponse>(url, headers);
  }

}
