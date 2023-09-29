import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinilizedTemplateComponent } from './finilized-template.component';

describe('FinilizedTemplateComponent', () => {
  let component: FinilizedTemplateComponent;
  let fixture: ComponentFixture<FinilizedTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinilizedTemplateComponent]
    });
    fixture = TestBed.createComponent(FinilizedTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
