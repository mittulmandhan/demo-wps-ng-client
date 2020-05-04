import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpParams, HttpHeaders } from '@angular/common/http';
import { Capabilities } from '../models/capabilities';
import { Process } from '../models/process';

@Injectable({
  providedIn: 'root'
})
export class ServiceinfoService {

  xmlResponse: any;
  capabilitiesResponse: Capabilities;

  constructor(private http: HttpClient) { }

  getCapabilities_GET(serviceUrl, version, cap) {
    const myParams: HttpParams = new HttpParams().set('Service', 'WPS').set('Request', 'GetCapabilities').set('Version', version);

    this.http.get(serviceUrl, {params: myParams, responseType: 'text'})
    .subscribe((data) => {

      const parseString = require('xml2js').parseString;

      parseString(data, (err, result: {}) => {
        cap.service = result['wps:Capabilities'].$.service;
        cap.version = result['wps:Capabilities'].$.version;
        cap.title = result['wps:Capabilities']['ows:ServiceIdentification'][0]['ows:Title'][0];

        let processSummary: any[];
        if (version === '2.0.0') {
          processSummary = result['wps:Capabilities']['wps:Contents'][0]['wps:ProcessSummary'];
        } else {
          processSummary = result['wps:Capabilities']['wps:ProcessOfferings'][0]['wps:Process'];
        }

        processSummary.forEach((processDetails) => {
          const process: Process = new Process();
          if (version === '2.0.0') {
            process.processVersion = processDetails.$.processVersion;
            process.jobControlOptions = processDetails.$.jobControlOptions;
            process.outputTransmission = processDetails.$.outputTransmission;
          } else {
            process.processVersion = processDetails.$['wps:processVersion'];
          }

          process.title = processDetails['ows:Title'][0];
          process.identifier = processDetails['ows:Identifier'][0];

          cap.processes.push(process);
        });

      });
      console.log(cap);
    });
  }

}
