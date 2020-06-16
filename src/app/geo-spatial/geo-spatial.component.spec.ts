import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoSpatialComponent } from './geo-spatial.component';

describe('GeoSpatialComponent', () => {
  let component: GeoSpatialComponent;
  let fixture: ComponentFixture<GeoSpatialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoSpatialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoSpatialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
