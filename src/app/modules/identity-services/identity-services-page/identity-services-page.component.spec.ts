import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityServicesPageComponent } from './identity-services-page.component';

describe('IdentityServicesPageComponent', () => {
  let component: IdentityServicesPageComponent;
  let fixture: ComponentFixture<IdentityServicesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityServicesPageComponent]
    });
    fixture = TestBed.createComponent(IdentityServicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
