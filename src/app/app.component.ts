import { Component } from '@angular/core';
import { ServiceinfoService } from './services/serviceinfo.service';
import { DescribeprocessService } from './services/describeprocess.service';
import { Capabilities } from './models/capabilities';
import { Process } from './models/process';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo WPS Angular Client';
  serviceUrls = [
    'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService',
    'https://riesgos.52north.org/wps/WebProcessingService',
    'http://geoprocessing.demo.52north.org:8080/javaps/service'
  ];
  selectedUrl = 'http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService';
  selectedVersion: '1.0.0' | '2.0.0' = '2.0.0';
  selectedProcessId: string;
  capabilitiesResponse: Capabilities;

  constructor(private serviceInfo: ServiceinfoService, private describeProcess: DescribeprocessService) {}
  call_getCapabilities() {
    this.serviceInfo.getCapabilities_GET(this.selectedUrl, this.selectedVersion)
    .subscribe(function(data) {

      const parseString = require('xml2js').parseString;

      parseString(data, (err, result: {}) => {
        // console.log(result);
        // console.log(result['wps:Capabilities']['wps:Contents'][0]['wps:ProcessSummary'][0]);
        // console.log(result['wps:Capabilities']['wps:Contents'][0]['wps:ProcessSummary'][0].$.processVersion);
        // console.log(result['wps:Capabilities']['wps:Contents'][0]['wps:ProcessSummary'][0].$.jobControlOptions);
        // console.log(result['wps:Capabilities']['wps:Contents'][0]['wps:ProcessSummary'][0].$.outputTransmission);
        // console.log(result['wps:Capabilities']['wps:Contents'][0]['wps:ProcessSummary'][0]['ows:Title'][0]);
        // console.log(result['wps:Capabilities']['wps:Contents'][0]['wps:ProcessSummary'][0]['ows:Identifier'][0]);
        const cap: Capabilities = new Capabilities();
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
        this.capabilitiesResponse = cap;
      });
    });
  }

  call_DescribeProcess() {
    this.describeProcess.describeProcess_GET(this.selectedUrl, this.selectedVersion, this.selectedProcessId)
    .subscribe((data) => {
      this.capabilitiesResponse = data;
    });
  }
}
