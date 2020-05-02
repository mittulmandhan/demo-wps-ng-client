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
  processCount = 1;

  constructor(private serviceInfo: ServiceinfoService, private describeProcess: DescribeprocessService) {}
  call_getCapabilities() {
    this.capabilitiesResponse = new Capabilities();
    this.serviceInfo.getCapabilities_GET(this.selectedUrl, this.selectedVersion, this.capabilitiesResponse);
    console.log(this.capabilitiesResponse);
  }

  call_DescribeProcess() {
    this.capabilitiesResponse = this.describeProcess.describeProcess_GET(this.selectedUrl, this.selectedVersion, this.selectedProcessId);
    console.log(this.capabilitiesResponse);
  }
}
