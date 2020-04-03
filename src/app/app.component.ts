import { Component } from '@angular/core';
import { ServiceinfoService } from './services/serviceinfo.service';
import { DescribeprocessService } from './services/describeprocess.service';
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
  response: string;

  constructor(private serviceInfo: ServiceinfoService, private describeProcess: DescribeprocessService) {}
  call_getCapabilities() {
    this.response = this.serviceInfo.getCapabilities_GET(this.selectedUrl, this.selectedVersion);
  }

  call_DescribeProcess() { }
}
