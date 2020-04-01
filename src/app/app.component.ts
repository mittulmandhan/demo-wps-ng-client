import { Component } from '@angular/core';
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
  selectedUrl = '';
  selectedVersion: '1.0.0' | '2.0.0' = '2.0.0';
  selectedProcessId = '';
  response = ``;

  call_getCapabilities() { }

  call_DescribeProcess() { }
}
