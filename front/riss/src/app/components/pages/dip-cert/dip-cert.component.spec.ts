import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipCertComponent } from './dip-cert.component';

describe('DipCertComponent', () => {
  let component: DipCertComponent;
  let fixture: ComponentFixture<DipCertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DipCertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DipCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
