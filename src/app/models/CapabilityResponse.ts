export interface CapabilityResponse {
    Capabilities: Capabilities;
}


export interface Capabilities {
    ServiceIdentification: ServiceIdentification;
    Contents: Contents;
    _version: string;
}

export interface ServiceIdentification {
    Title: string;
    Abstract: string;
    ServiceType: string;
}

export interface Contents {
    ProcessSummaries: Array<ProcessSummaries>;
}

export interface ProcessSummaries {
    identifier: string;
    title: string;
    _processVersion: string;
    _jobControlOptions: string;
    _outputTransmission: string;
    url: string;
}
