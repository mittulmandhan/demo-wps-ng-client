import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceinfoService } from './services/serviceinfo.service';
import { DescribeprocessService } from './services/describeprocess.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { GeoSpatialComponent } from './geo-spatial/geo-spatial.component';
import { GetCapabilitiesComponent } from './get-capabilities/get-capabilities.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GeoSpatialComponent,
    GetCapabilitiesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    ServiceinfoService,
    DescribeprocessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
