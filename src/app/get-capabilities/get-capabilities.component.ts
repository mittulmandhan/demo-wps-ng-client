import { environment } from './../../environments/environment';
import { DescribeprocessService } from './../services/describeprocess.service';
import { ServiceinfoService } from './../services/serviceinfo.service';
import { ProcessOfferingResponse } from './../models/ProcessOfferingResponse';
import { CapabilityResponse } from './../models/CapabilityResponse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-capabilities',
  templateUrl: './get-capabilities.component.html',
  styleUrls: ['./get-capabilities.component.css']
})
export class GetCapabilitiesComponent implements OnInit {

  title = 'Demo WPS Angular Client';
  selectedUrl = environment.wpsUrls[0];
  selectedVersion: '1.0.0' | '2.0.0' = '2.0.0';
  processUrl: string;
  capabilitiesResponse: CapabilityResponse;
  processOfferingResponse: ProcessOfferingResponse;
  processCount = 1;

  constructor(private serviceInfo: ServiceinfoService, private describeProcess: DescribeprocessService) {}
  ngOnInit(): void {
  }

  getCapabilities() {
      this.serviceInfo.getCapabilities(this.selectedUrl, this.selectedVersion).subscribe((res: CapabilityResponse) => {
          console.log('Hello', res);
          this.capabilitiesResponse = res;
          console.log('capabilitiesResponse', this.capabilitiesResponse);
      });
  }

  getProcessOffering() {
      this.describeProcess.getProcessOffering(this.processUrl, this.selectedVersion).subscribe((res: ProcessOfferingResponse) => {
          console.log(res);
          this.processOfferingResponse = res;
          this.processOfferingResponse.ProcessOffering._executeUrl = res.ProcessOffering['execute-url'];
          console.log(this.processOfferingResponse);
          console.log(this.processOfferingResponse.ProcessOffering._executeUrl);
          console.log(this.processOfferingResponse.ProcessOffering.Process.Identifier);
      });
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

  public get version() {
    return this.capabilitiesResponse.Capabilities._version;
  }
}
