import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServiceinfoService } from './services/serviceinfo.service';
import { DescribeprocessService } from './services/describeprocess.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServiceinfoService,
    DescribeprocessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }