import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantDashboardComponent } from './grant-dashboard.component';

describe('GrantDashboardComponent', () => {
  let component: GrantDashboardComponent;
  let fixture: ComponentFixture<GrantDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrantDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
