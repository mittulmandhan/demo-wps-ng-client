import {CapabilityResponse} from '../models/CapabilityResponse';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ServiceinfoService {

    constructor(private http: HttpClient) {}


    public getCapabilities(url: string, version: string): Observable < any > {
        const myParams: HttpParams = new HttpParams().set('Service', 'WPS').set('Request', 'GetCapabilities').set('Version', version);
        const headers: any = {
            params: myParams
        };
        return this.http.get<CapabilityResponse>(url, headers);
    }

}
