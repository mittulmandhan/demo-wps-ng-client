import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCapabilitiesComponent } from './get-capabilities.component';

describe('GetCapabilitiesComponent', () => {
  let component: GetCapabilitiesComponent;
  let fixture: ComponentFixture<GetCapabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCapabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
