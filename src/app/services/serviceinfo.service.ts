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
        // console.log(result);
        console.log(result['wps:Capabilities'].$.service);
        console.log(result['wps:Capabilities'].$.version);
        console.log(result['wps:Capabilities']['ows:ServiceIdentification'][0]['ows:Title'][0]);
        // console.log(result['wps:Capabilities']['wps:Contents'][0]['wps:ProcessSummary'][0]);
        // console.log(result['wps:Capabilities']['wps:Contents'][0]['wps:ProcessSummary'][0].$.processVersion);
        // console.log(result['wps:Capabilities']['wps:Contents'][0]['wps:ProcessSummary'][0].$.jobControlOptions);
        // console.log(result['wps:Capabilities']['wps:Contents'][0]['wps:ProcessSummary'][0].$.outputTransmission);
        // console.log(result['wps:Capabilities']['wps:Contents'][0]['wps:ProcessSummary'][0]['ows:Title'][0]);
        // console.log(result['wps:Capabilities']['wps:Contents'][0]['wps:ProcessSummary'][0]['ows:Identifier'][0]);
        // const cap: Capabilities = new Capabilities();
        // obj.capabilitiesResponse = new Capabilities();
        cap.service = result['wps:Capabilities'].$.service;
        cap.version = result['wps:Capabilities'].$.version;
        cap.title = result['wps:Capabilities']['ows:ServiceIdentification'][0]['ows:Title'][0];
        const processSummary: any[] = result['wps:Capabilities']['wps:Contents'][0]['wps:ProcessSummary'];

        processSummary.forEach((processDetails) => {
          const process: Process = new Process();
          // console.log(processDetails.$.processVersion);
          // console.log(processDetails.$.jobControlOptions);
          // console.log(processDetails.$.outputTransmission);
          // console.log(processDetails['ows:Title'][0]);
          // console.log(processDetails['ows:Identifier'][0]);
          process.processVersion = processDetails.$.processVersion;
          process.jobControlOptions = processDetails.$.jobControlOptions;
          process.outputTransmission = processDetails.$.outputTransmission;
          process.title = processDetails['ows:Title'][0];
          process.identifier = processDetails['ows:Identifier'][0];
          cap.processes.push(process);
        });

      });
      console.log(cap);
    });
  }

}
