import { GetCapabilitiesComponent } from './get-capabilities/get-capabilities.component';
import { GeoSpatialComponent } from './geo-spatial/geo-spatial.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/getcapabilities', pathMatch: 'full' },
  { path: 'getcapabilities', component: GetCapabilitiesComponent},
  { path: 'geoservice', component: GeoSpatialComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
