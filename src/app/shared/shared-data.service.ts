import { SharedModule } from './shared.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: SharedModule
})
export class SharedDataService {

  constructor() { }
}
