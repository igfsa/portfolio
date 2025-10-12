/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Macoratti_webappComponent } from './macoratti_webapp.component';

describe('Macoratti_webappComponent', () => {
  let component: Macoratti_webappComponent;
  let fixture: ComponentFixture<Macoratti_webappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Macoratti_webappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Macoratti_webappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
