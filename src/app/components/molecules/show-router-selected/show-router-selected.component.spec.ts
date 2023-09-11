import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRouterSelectedComponent } from './show-router-selected.component';

describe('ShowRouterSelectedComponent', () => {
  let component: ShowRouterSelectedComponent;
  let fixture: ComponentFixture<ShowRouterSelectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowRouterSelectedComponent]
    });
    fixture = TestBed.createComponent(ShowRouterSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
