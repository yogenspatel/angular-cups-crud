import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupsCardComponent } from './cups-card.component';

describe('CupsCardComponent', () => {
  let component: CupsCardComponent;
  let fixture: ComponentFixture<CupsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
