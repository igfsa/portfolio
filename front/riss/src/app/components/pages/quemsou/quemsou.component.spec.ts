import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemsouComponent } from './quemsou.component';

describe('QuemsouComponent', () => {
  let component: QuemsouComponent;
  let fixture: ComponentFixture<QuemsouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuemsouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuemsouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
