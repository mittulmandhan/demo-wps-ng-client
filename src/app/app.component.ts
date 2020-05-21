import { environment } from './../environments/environment';
import {CapabilityResponse} from './models/CapabilityResponse';
import {Component} from '@angular/core';
import {ServiceinfoService} from './services/serviceinfo.service';
import {DescribeprocessService} from './services/describeprocess.service';
import {ProcessOffering} from './models/processOffering';
@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
    title = 'Demo WPS Angular Client';
    selectedUrl = environment.wpsUrls[0];
    selectedVersion: '1.0.0' | '2.0.0' = '2.0.0';
    selectedProcessId: string;
    capabilitiesResponse: CapabilityResponse;
    processResponse: ProcessOffering;
    processCount = 1;

    constructor(private serviceInfo: ServiceinfoService, private describeProcess: DescribeprocessService) {}

    getCapabilities() {
        this.serviceInfo.getCapabilities(this.selectedUrl, this.selectedVersion).subscribe((res: CapabilityResponse) => {
            console.log('Hello', res);
            this.capabilitiesResponse = res;
            console.log('capabilitiesResponse', this.capabilitiesResponse);
        });
    }

    processOffering() {
        this.processResponse = new ProcessOffering();
        this.describeProcess.describeProcess_GET(this.selectedUrl, this.selectedVersion, this.selectedProcessId, this.processResponse);
    }

    public get processSummaries() {
      return this.capabilitiesResponse.Capabilities.Contents.ProcessSummaries;
    }

    public get identification() {
      return this.capabilitiesResponse.Capabilities.ServiceIdentification;
    }

    public get urls() {
      return environment.wpsUrls;
    }

    public getVersion() {
      return this.capabilitiesResponse.Capabilities._version;
    }
}
