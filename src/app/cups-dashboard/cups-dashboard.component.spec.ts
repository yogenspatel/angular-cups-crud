import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupsDashboardComponent } from './cups-dashboard.component';

describe('CupsDashboardComponent', () => {
  let component: CupsDashboardComponent;
  let fixture: ComponentFixture<CupsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
