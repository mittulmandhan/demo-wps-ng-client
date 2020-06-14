import { XmlElement } from '../shared/custom-decorators';


export interface ProcessOfferingResponse {
    ProcessOffering: ProcessOffering;
}


export interface ProcessOffering {
    Process: Process;
    _processVersion: string;
    _jobControlOptions: Array<string>;
    _outputTransmission: Array<string>;
    _executeUrl: string;
}

export interface Process {
    Title: string;
    Identifier: string;
    Input: Array<Input>;
    Output: Array<Output>;

}

export interface Input {
    Title: string;
    Identifier: string;
    ComplexData: ComplexData;
    _minOccurs: number;
    _maxOccurs: number;
}

export interface Output {
    Title: string;
    Identifier: string;
    ComplexData: ComplexData;
}

export interface ComplexData {
    Format: Array<Format>;
}

export interface Format {
    _default: string;
    _mimeType: string;
    _encoding: string;
    _schema: string;
}
