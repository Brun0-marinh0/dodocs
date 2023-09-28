import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinilizedComponent } from './finilized.component';

describe('FinilizedComponent', () => {
  let component: FinilizedComponent;
  let fixture: ComponentFixture<FinilizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinilizedComponent]
    });
    fixture = TestBed.createComponent(FinilizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
