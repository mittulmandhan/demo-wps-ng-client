import { Process } from './process';
export class Capabilities {
    title: string;
    version: string;
    service: string;
    processes: Process[];

    constructor() {
        this.processes = new Array<Process>();
    }
}
